import { Point } from "../core/point";

export interface LineDrawer {
  drawLineBetween(startPoint: Point, endPoint: Point): void;
}
