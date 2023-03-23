/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { throwIfNull } from "../utils/exceptions";

import { Point } from "./point";

import { LineDrawer } from "../contracts/lineDrawer";
import { DrawingBoard } from "../contracts/drawingBoard";

export class Bresenham implements LineDrawer {
  private readonly drawingBoard: DrawingBoard;

  private deltaX = 0;
  private deltaY = 0;

  private xAxisIncrement = 0;
  private yAxisIncrement = 0;

  private currentPoint: Point | null = null;

  constructor(drawingBoard: DrawingBoard) {
    throwIfNull(drawingBoard, "Drawing board cannot be null");

    this.drawingBoard = drawingBoard;
  }

  private initFieldsBasedOn(startPoint: Point, endPoint: Point) {
    this.currentPoint = Point.clone(startPoint);

    this.deltaX = endPoint.x - startPoint.x;
    this.deltaY = endPoint.y - startPoint.y;

    this.xAxisIncrement = this.deltaX >= 0 ? 1 : -1;
    this.yAxisIncrement = this.deltaY >= 0 ? 1 : -1;

    this.deltaX = this.deltaX < 0 ? -this.deltaX : this.deltaX;
    this.deltaY = this.deltaY < 0 ? -this.deltaY : this.deltaY;
  }

  private handleCaseWhereDeltaXIsGreater() {
    let p = 2 * this.deltaY - this.deltaX;

    const incrementsForP = {
      whenNegative: 2 * this.deltaY,
      whenPositiveOr0: 2 * (this.deltaY - this.deltaX),
    };

    for (let i = 0; i < this.deltaX; i++) {
      this.currentPoint!.x += this.xAxisIncrement;
      this.currentPoint!.y += p >= 0 ? this.yAxisIncrement : 0;

      p += p >= 0 ? incrementsForP.whenPositiveOr0 : incrementsForP.whenNegative;

      this.drawingBoard.setPixel({ atPoint: this.currentPoint! });
    }
  }

  private handleCaseWhereDeltaYIsGreater() {
    let p = 2 * this.deltaX - this.deltaY;

    const incrementsForP = {
      whenNegative: 2 * this.deltaX,
      whenPositiveOr0: 2 * (this.deltaX - this.deltaY),
    };

    for (let i = 0; i < this.deltaY; i++) {
      this.currentPoint!.y += this.yAxisIncrement;
      this.currentPoint!.x += p >= 0 ? this.xAxisIncrement : 0;

      p += p >= 0 ? incrementsForP.whenPositiveOr0 : incrementsForP.whenNegative;

      this.drawingBoard.setPixel({ atPoint: this.currentPoint! });
    }
  }

  drawLineBetween(startPoint: Point, endPoint: Point): void {
    throwIfNull(startPoint, "Start point cannot be null");
    throwIfNull(endPoint, "End point cannot be null");

    this.initFieldsBasedOn(startPoint, endPoint);

    if (this.deltaX > this.deltaY) {
      this.handleCaseWhereDeltaXIsGreater();
    } else {
      this.handleCaseWhereDeltaYIsGreater();
    }
  }
}
