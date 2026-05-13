export type HeroDecorSpriteSpec = {
  id: string;
  src: string;
  kind: "image" | "sheet";
  rows: number;
  columns: number;
  frameDurationMs?: number;
};

const SHEET_PATTERN = /R(\d+)C(\d+)/i;
const ICON_ENVIRON_BASE = "/Sprite/Icons/environ";

function createSprite(id: string, fileName: string): HeroDecorSpriteSpec {
  const src = `${ICON_ENVIRON_BASE}/${fileName}`;
  const match = fileName.match(SHEET_PATTERN);

  if (!match) {
    return {
      id,
      src,
      kind: "image",
      rows: 1,
      columns: 1,
    };
  }

  const rows = Number.parseInt(match[1] ?? "1", 10);
  const columns = Number.parseInt(match[2] ?? "1", 10);
  const safeRows = Math.max(1, rows);
  const safeColumns = Math.max(1, columns);

  return {
    id,
    src,
    kind: "sheet",
    rows: safeRows,
    columns: safeColumns,
    frameDurationMs: safeColumns <= 2 ? 1200 : 960,
  };
}

export const heroDecorSprites = [
  createSprite("dragon", "BaiBaiDragonSheetR1C2.png"),
  createSprite("bell", "Bell.png"),
  createSprite("bullet", "BulletSheetR1C4.png"),
  createSprite("chara", "Chara.png"),
  createSprite("clover", "Clover.png"),
  createSprite("clover-bird", "CloverTori.png"),
  createSprite("events", "Events.png"),
  createSprite("bird", "FlyBird.png"),
  createSprite("heart", "Heart.png"),
  createSprite("pinkmoon", "Pinkmoon.png"),
  createSprite("sakura-tree", "Sakura_no_tree.png"),
  createSprite("timer", "Timer-SheetR1C8.png"),
];
