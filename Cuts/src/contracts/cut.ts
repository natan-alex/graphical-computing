import { Point } from "../core/point";

import { RectangleCorners } from "../common/types";

export type DrawSelfOnParams = {
  color?: string;
  topLeftCorner: Point;
  rightBottomCorner: Point;
}; 

export interface Cut {
  get isDrawnOnScreen(): boolean;

  get corners(): RectangleCorners | null;

  removeFromScreen(): void;

  drawSelf(params: DrawSelfOnParams): void;
}
