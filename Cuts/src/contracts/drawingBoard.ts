import { Point } from "../core/point";

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

  addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (event: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions | undefined
  ): void;
}
