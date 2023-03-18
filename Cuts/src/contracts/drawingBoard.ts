import { Point } from "../core/point";

import { MouseEventHandler } from "../common/types";

export type SetPixelParams = {
  atPoint: Point;
  color?: string;
};

export type DrawRectangleParams = {
  width: number;
  height: number;
  color?: string;
  leftCorner: Point;
};

export interface DrawingBoard {
  clearContent(): void;

  setPixel(params: SetPixelParams): void;

  drawRectangle(params: DrawRectangleParams): void;

  setClickEventHandler(handler: MouseEventHandler): void;
}
