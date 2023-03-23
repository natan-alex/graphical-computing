import { Point } from "../core/point";

import { RectangleBounds } from "../common/types";

export type DrawSelfOnParams = {
  color?: string;
  topLeftCorner: Point;
  rightBottomCorner: Point;
}; 

export interface Cut {
  get isDrawnOnScreen(): boolean;

  get bounds(): RectangleBounds | null;

  removeFromScreen(): void;

  drawSelf(params: DrawSelfOnParams): void;
}
