import { Point } from "../core/point";

import { MouseEventHandler } from "../common/types";

export type SetPixelParams = {
  atPoint: Point;
  color?: string;
};

export type DrawRectangleParams = {
  color?: string;
  topLeftCorner: Point;
  rightBottomCorner: Point;
};

export type ClearRectangleParams = Omit<DrawRectangleParams, "color">;

export interface DrawingBoard {
  clearContent(): void;

  setPixel(params: SetPixelParams): void;

  drawRectangle(params: DrawRectangleParams): void;

  clearRectangle(params: ClearRectangleParams): void;

  setMouseDownEventHandler(handler: MouseEventHandler): void;

  setMouseMoveEventHandler(handler: MouseEventHandler): void;

  setMouseUpEventHandler(handler: MouseEventHandler): void;
}
