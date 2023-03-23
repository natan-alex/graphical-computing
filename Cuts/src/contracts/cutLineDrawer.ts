import { Point } from "../core/point";

export interface CutLineDrawer {
  drawLineOnCut(startPoint: Point, endPoint: Point): void;
}
