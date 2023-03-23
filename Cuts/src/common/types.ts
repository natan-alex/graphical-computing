import { Point } from "../core/point";

export type EventHandler<T = unknown> = (infos?: T) => void;

export type RectangleCorners = {
  topLeft: Point;
  rightBottom: Point;
};

export type RectangleBounds = {
  minimumX: number;
  maximumX: number;
  minimumY: number;
  maximumY: number;
};
