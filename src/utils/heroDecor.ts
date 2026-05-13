export type HeroDecorSprite = {
  id: string;
  src: string;
  pixelWidth: number;
  pixelHeight: number;
  displayWidth: number;
  displayHeight: number;
  floatDurationMs: number;
  floatDistance: number;
};

export type HeroDecorSpriteSpec = HeroDecorSprite & {
  kind: "image" | "sheet";
  frameCount: number;
  frameWidth: number;
  frameHeight: number;
  frameDurationMs?: number;
};

const SHEET_PATTERN = /R(\d+)C(\d+)/i;

function createSprite(sprite: HeroDecorSprite): HeroDecorSpriteSpec {
  const match = sprite.src.match(SHEET_PATTERN);

  if (!match) {
    return {
      ...sprite,
      kind: "image",
      frameCount: 1,
      frameWidth: sprite.pixelWidth,
      frameHeight: sprite.pixelHeight,
    };
  }

  const rows = Number.parseInt(match[1] ?? "1", 10);
  const columns = Number.parseInt(match[2] ?? "1", 10);
  const safeRows = Math.max(1, rows);
  const safeColumns = Math.max(1, columns);

  return {
    ...sprite,
    kind: "sheet",
    frameCount: safeColumns,
    frameWidth: Math.floor(sprite.pixelWidth / safeColumns),
    frameHeight: Math.floor(sprite.pixelHeight / safeRows),
    frameDurationMs: safeColumns <= 2 ? 1200 : 960,
  };
}

export const heroDecorSprites = [
  createSprite({
    id: "heart",
    src: "/Sprite/environ/Heart.png",
    pixelWidth: 15,
    pixelHeight: 13,
    displayWidth: 156,
    displayHeight: 136,
    floatDurationMs: 5800,
    floatDistance: 14,
  }),
  createSprite({
    id: "bird",
    src: "/Sprite/environ/FlyBird.png",
    pixelWidth: 17,
    pixelHeight: 17,
    displayWidth: 176,
    displayHeight: 176,
    floatDurationMs: 5200,
    floatDistance: 12,
  }),
  createSprite({
    id: "clover",
    src: "/Sprite/environ/Clover.png",
    pixelWidth: 11,
    pixelHeight: 11,
    displayWidth: 132,
    displayHeight: 132,
    floatDurationMs: 6400,
    floatDistance: 11,
  }),
  createSprite({
    id: "bell",
    src: "/Sprite/environ/Bell.png",
    pixelWidth: 17,
    pixelHeight: 17,
    displayWidth: 164,
    displayHeight: 164,
    floatDurationMs: 6100,
    floatDistance: 13,
  }),
  createSprite({
    id: "timer",
    src: "/Sprite/environ/Timer-SheetR1C8.png",
    pixelWidth: 128,
    pixelHeight: 18,
    displayWidth: 224,
    displayHeight: 252,
    floatDurationMs: 6800,
    floatDistance: 10,
  }),
  createSprite({
    id: "dragon",
    src: "/Sprite/environ/BaiBaiDragonSheetR1C2.png",
    pixelWidth: 36,
    pixelHeight: 20,
    displayWidth: 234,
    displayHeight: 260,
    floatDurationMs: 7200,
    floatDistance: 12,
  }),
];
