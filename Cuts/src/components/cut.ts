/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { RectangleCorners } from "../common/types";

import { DrawingBoard } from "../contracts/drawingBoard";
import { Cut as CutContract, DrawSelfOnParams } from "../contracts/cut";

import { throwIfNull } from "../utils/exceptions";

export class Cut implements CutContract {
  private readonly drawingBoard: DrawingBoard;

  private isDrawn = false;

  private rectangleCorners: RectangleCorners | null = null;

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

  drawSelf(params: DrawSelfOnParams) {
    this.rectangleCorners = {
      topLeft: params.topLeftCorner,
      rightBottom: params.rightBottomCorner,
    };

    this.drawingBoard.drawRectangle({ ...params });

    this.isDrawn = true;
  }

  removeFromScreen() {
    if (!this.isDrawn) return;

    this.drawingBoard.clearRectangle({
      topLeftCorner: this.rectangleCorners!.topLeft,
      rightBottomCorner: this.rectangleCorners!.rightBottom
    });

    this.isDrawn = false;
  }
}
