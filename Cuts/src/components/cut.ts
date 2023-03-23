/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { RectangleBounds, RectangleCorners } from "../common/types";

import { DrawingBoard } from "../contracts/drawingBoard";
import { Cut as CutContract, DrawSelfOnParams } from "../contracts/cut";

import { throwIfNull } from "../utils/exceptions";

export class Cut implements CutContract {
  private readonly drawingBoard: DrawingBoard;

  private isDrawn = false;

  private rectangleCorners: RectangleCorners | null = null;

  private rectangleBounds: RectangleBounds | null = null;

  constructor(drawingBoard: DrawingBoard) {
    throwIfNull(drawingBoard, "Drawing board cannot be null");

    this.drawingBoard = drawingBoard;
  }

  get isDrawnOnScreen() {
    return this.isDrawn;
  }

  get corners() {
    return this.rectangleCorners;
  }

  get bounds(): RectangleBounds | null {
    return this.rectangleBounds;
  }

  drawSelf(params: DrawSelfOnParams) {
    this.rectangleCorners = {
      topLeft: params.topLeftCorner,
      rightBottom: params.rightBottomCorner,
    };

    this.rectangleBounds = {
      minimumX: Math.min(params.topLeftCorner.x, params.rightBottomCorner.x),
      maximumX: Math.max(params.topLeftCorner.x, params.rightBottomCorner.x),
      minimumY: Math.min(params.topLeftCorner.y, params.rightBottomCorner.y),
      maximumY: Math.max(params.topLeftCorner.y, params.rightBottomCorner.y),
    };

    this.drawingBoard.drawRectangle({ ...params });

    this.isDrawn = true;
  }

  removeFromScreen() {
    if (!this.isDrawn) return;

    this.drawingBoard.clearRectangle({
      topLeftCorner: this.rectangleCorners!.topLeft,
      rightBottomCorner: this.rectangleCorners!.rightBottom,
    });

    this.isDrawn = false;
  }
}
