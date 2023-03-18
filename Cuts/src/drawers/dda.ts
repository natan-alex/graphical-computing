import { LineDrawer } from "../contracts/lineDrawer";
import { DrawingBoard } from "../contracts/drawingBoard";

import { Point } from "../core/point";

import { throwIfNull } from "../utils/exceptions";

export class DDA implements LineDrawer {
  private readonly drawingBoard: DrawingBoard;

  private steps = 0;
  private xAxisIncrement = 0;
  private yAxisIncrement = 0;

  constructor(drawingBoard: DrawingBoard) {
    throwIfNull(drawingBoard, "Drawing board cannot be null");

    this.drawingBoard = drawingBoard;
  }

  private computeBasicThingsBasedOn(startPoint: Point, endPoint: Point) {
    const deltaX = endPoint.x - startPoint.x;
    const deltaY = endPoint.y - startPoint.y;

    this.steps = Math.max(Math.abs(deltaX), Math.abs(deltaY));

    this.xAxisIncrement = deltaX / this.steps;
    this.yAxisIncrement = deltaY / this.steps;
  }

  drawLineBetween(startPoint: Point, endPoint: Point): void {
    throwIfNull(startPoint, "Start point cannot be null");
    throwIfNull(endPoint, "End point cannot be null");

    this.computeBasicThingsBasedOn(startPoint, endPoint);

    const currentPoint = new Point(startPoint.x, startPoint.y);

    this.drawingBoard.setPixel({ atPoint: currentPoint });

    for (let i = 0; i < this.steps; ++i) {
      currentPoint.x += this.xAxisIncrement;
      currentPoint.y += this.yAxisIncrement;

      this.drawingBoard.setPixel({ atPoint: currentPoint });
    }
  }
}
