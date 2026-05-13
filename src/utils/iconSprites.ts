export type SpriteAsset = {
  id: string;
  label: string;
  src: string;
  kind: "image" | "sheet";
  rows: number;
  columns: number;
  frameDurationMs?: number;
};

const SHEET_PATTERN = /R(\d+)C(\d+)/i;
const ICON_BASE_PATH = "/Sprite/Icons/Unique";

function createSpriteAsset(id: string, fileName: string, label: string): SpriteAsset {
  const src = `${ICON_BASE_PATH}/${fileName}`;
  const match = fileName.match(SHEET_PATTERN);

  if (!match) {
    return {
      id,
      label,
      src,
      kind: "image",
      rows: 1,
      columns: 1,
    };
  }

  const rows = Number.parseInt(match[1] ?? "1", 10);
  const columns = Number.parseInt(match[2] ?? "1", 10);

  return {
    id,
    label,
    src,
    kind: "sheet",
    rows: Math.max(1, rows),
    columns: Math.max(1, columns),
    frameDurationMs: columns <= 2 ? 1200 : 960,
  };
}

export const spriteIconAssets = {
  gameBoy: createSpriteAsset("gameboy", "GameBoy.png", "Game Boy"),
  hack: createSpriteAsset("hack", "Hack.png", "Hack"),
  king: createSpriteAsset("king", "KingSheetR1C4.png", "King"),
  necoArc: createSpriteAsset("necoarc", "NecoArc.png", "Neco Arc"),
} as const;