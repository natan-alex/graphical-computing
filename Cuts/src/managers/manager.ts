import { Point } from "../core/point";

import { LineDrawer } from "../contracts/lineDrawer";
import { DrawingBoard } from "../contracts/drawingBoard";

import { ButtonsAgregator } from "../components/buttonsAgregator";

import { MouseEventHandler } from "../common/types";

import { DDA } from "../drawers/dda";

import { throwIfNull } from "../utils/exceptions";

export class Manager {
  private readonly ddaLineDrawer: LineDrawer;
  private readonly drawingBoard: DrawingBoard;
  private readonly buttonsAgregator: ButtonsAgregator;

  private startPoint: Point | null = null;

  private actionToExecuteOnNextDrawingBoardClick: "drawALine" | "defineACut" =
    "drawALine";

  constructor(drawingBoard: DrawingBoard, buttonsAgregator: ButtonsAgregator) {
    throwIfNull(drawingBoard, "Drawing board cannot be null");
    throwIfNull(buttonsAgregator, "Buttons agregator cannot be null");

    this.drawingBoard = drawingBoard;
    this.buttonsAgregator = buttonsAgregator;
    this.ddaLineDrawer = new DDA(drawingBoard);
  }

  private handleDrawLineActionOnClick: MouseEventHandler = (event) => {
    const point = new Point(event.x, event.y);

    if (this.startPoint) {
      this.ddaLineDrawer.drawLineBetween(this.startPoint, point);
      this.startPoint = null;
    } else {
      this.startPoint = point;
    }
  };

  private handleDefineACutActionOnClick: MouseEventHandler = (event) => {
    const point = new Point(event.x, event.y);

    if (this.startPoint) {
      this.drawingBoard.drawRectangle({
        leftCorner: this.startPoint,
        width: point.x - this.startPoint.x,
        height: point.y - this.startPoint.y,
      });

      this.startPoint = null;
    } else {
      this.startPoint = point;
    }
  };

  private onDrawingBoardClick: MouseEventHandler = (event) => {
    if (this.actionToExecuteOnNextDrawingBoardClick === "drawALine") {
      this.handleDrawLineActionOnClick(event);
    } else {
      this.handleDefineACutActionOnClick(event);
    }
  };

  private onDrawLineButtonClick: MouseEventHandler = () => {
    this.actionToExecuteOnNextDrawingBoardClick = "drawALine";
  };

  private onDefineCutButtonClick: MouseEventHandler = () => {
    this.actionToExecuteOnNextDrawingBoardClick = "defineACut";
  };

  private onClearScreenButtonClick: MouseEventHandler = () => {
    this.drawingBoard.clearContent();
  };

  setup() {
    this.drawingBoard.setClickEventHandler(this.onDrawingBoardClick);
    this.buttonsAgregator.setDrawLineButtonClickEventHandler(
      this.onDrawLineButtonClick
    );
    this.buttonsAgregator.setDefineCutButtonClickEventHandler(
      this.onDefineCutButtonClick
    );
    this.buttonsAgregator.setClearScreenButtonClickEventHandler(
      this.onClearScreenButtonClick
    );
  }
}
