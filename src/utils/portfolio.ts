import { getCollection, type CollectionEntry } from "astro:content";

export type PortfolioProjectEntry = CollectionEntry<"projects">;
export type PortfolioSectionEntry = CollectionEntry<"project-sections">;
export type PortfolioCategory = PortfolioProjectEntry["data"]["category"];

type ParsedDate = {
  year: number;
  month: number;
  day?: number;
  precision: "month" | "day";
};

const collator = new Intl.Collator("ja");

function parseProductionDate(value?: string): ParsedDate | null {
  if (!value) {
    return null;
  }

  if (/^\d{4}-\d{2}$/.test(value)) {
    const [year, month] = value.split("-");
    return {
      year: Number(year),
      month: Number(month),
      precision: "month",
    };
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-");
    return {
      year: Number(year),
      month: Number(month),
      day: Number(day),
      precision: "day",
    };
  }

  return null;
}

function formatParsedDate(date: ParsedDate, omitYear = false): string {
  const yearLabel = omitYear ? "" : `${date.year}年`;

  if (date.precision === "month") {
    return `${yearLabel}${date.month}月`;
  }

  return `${yearLabel}${date.month}月${date.day}日`;
}

function getDaySpan(start: ParsedDate, end: ParsedDate): number {
  if (start.day === undefined || end.day === undefined) {
    return 0;
  }

  const startDate = Date.UTC(start.year, start.month - 1, start.day);
  const endDate = Date.UTC(end.year, end.month - 1, end.day);

  return Math.floor((endDate - startDate) / 86400000) + 1;
}

function getMonthSpan(start: ParsedDate, end: ParsedDate): number {
  return (end.year - start.year) * 12 + (end.month - start.month) + 1;
}

export function formatProductionPeriod(
  startValue?: string,
  endValue?: string,
): string {
  const start = parseProductionDate(startValue);
  const end = parseProductionDate(endValue ?? startValue);

  if (!start && !end) {
    return "";
  }

  if (!start && end) {
    return formatParsedDate(end);
  }

  if (!start) {
    return "";
  }

  if (!end || startValue === endValue || !endValue) {
    if (start.precision === "month") {
      return `${formatParsedDate(start)} (1か月)`;
    }

    return formatParsedDate(start);
  }

  const sameYear = start.year === end.year;
  const endLabel = formatParsedDate(end, sameYear);

  if (start.precision === "day" && end.precision === "day") {
    return `${formatParsedDate(start)} - ${endLabel} (${getDaySpan(start, end)}日間)`;
  }

  if (start.precision === "month" && end.precision === "month") {
    return `${formatParsedDate(start)} - ${endLabel} (${getMonthSpan(start, end)}か月)`;
  }

  return `${formatParsedDate(start)} - ${endLabel}`;
}

export function getCompletionLabel(entry: Pick<PortfolioProjectEntry, "data">): string {
  if (!entry.data.status) {
    return "";
  }

  return entry.data.status === "completed" ? "Completed" : "In Progress";
}

export function getProjectCollectionLabel(category: PortfolioCategory): string {
  return category === "game" ? "Game" : "Other Project";
}

export function getProjectBackLink(category: PortfolioCategory): string {
  return category === "game" ? "/#games" : "/#other-projects";
}

export function getProjectSortValue(entry: PortfolioProjectEntry): number {
  const value = entry.data.production.end ?? entry.data.production.start;
  return value ? Number(value.replaceAll("-", "")) : 0;
}

export function sortPortfolioEntries(
  entries: PortfolioProjectEntry[],
): PortfolioProjectEntry[] {
  return [...entries].sort((left, right) => {
    const byPeriod = getProjectSortValue(right) - getProjectSortValue(left);

    if (byPeriod !== 0) {
      return byPeriod;
    }

    return collator.compare(left.data.name, right.data.name);
  });
}

export function sortPortfolioSections(
  entries: PortfolioSectionEntry[],
): PortfolioSectionEntry[] {
  return [...entries].sort((left, right) => {
    const byOrder = left.data.order - right.data.order;

    if (byOrder !== 0) {
      return byOrder;
    }

    return collator.compare(left.data.title, right.data.title);
  });
}

export async function getAllProjects(): Promise<PortfolioProjectEntry[]> {
  const projects = await getCollection("projects");
  return sortPortfolioEntries(projects);
}

export async function getGroupedProjects(): Promise<{
  allProjects: PortfolioProjectEntry[];
  games: PortfolioProjectEntry[];
  otherProjects: PortfolioProjectEntry[];
}> {
  const allProjects = await getAllProjects();

  return {
    allProjects,
    games: allProjects.filter((project) => project.data.category === "game"),
    otherProjects: allProjects.filter(
      (project) => project.data.category === "other",
    ),
  };
}

export async function getProjectById(
  projectId: string,
): Promise<PortfolioProjectEntry | undefined> {
  const projects = await getCollection("projects", (project) => project.id === projectId);
  return projects[0];
}

export async function getProjectBySlug(
  slug: string,
): Promise<PortfolioProjectEntry | undefined> {
  const projects = await getCollection(
    "projects",
    (project) => project.data.slug === slug,
  );
  return projects[0];
}

export async function getProjectSections(
  projectId: string,
): Promise<PortfolioSectionEntry[]> {
  const sections = await getCollection(
    "project-sections",
    (section) => section.data.project.id === projectId,
  );

  return sortPortfolioSections(sections);
}
