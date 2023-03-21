import { Point } from "../core/point";

export type MouseEventHandler = (event: MouseEvent) => void;

export type RectangleCorners = {
  topLeft: Point;
  rightBottom: Point;
};
