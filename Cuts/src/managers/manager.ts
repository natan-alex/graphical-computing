/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DDA } from "../core/dda";
import { Point } from "../core/point";
import { CohenSutherland } from "../core/cohenSutherland";

import { MouseEventHandler } from "../common/types";

import { Cut } from "../contracts/cut";
import { LineDrawer } from "../contracts/lineDrawer";
import { DrawingBoard } from "../contracts/drawingBoard";

import { Cut as CutImpl } from "../components/cut";
import { ButtonsAgregator } from "../components/buttonsAgregator";

import { throwIfNull } from "../utils/exceptions";

export class Manager {
  private readonly cut: Cut;
  private readonly ddaLineDrawer: LineDrawer;
  private readonly drawingBoard: DrawingBoard;
  private readonly cohenSutherland: CohenSutherland;
  private readonly buttonsAgregator: ButtonsAgregator;

  private startPoint: Point | null = null;
  private endPoint: Point | null = null;

  private actionToExecute: "drawALine" | "drawACut" = "drawALine";

  constructor(drawingBoard: DrawingBoard, buttonsAgregator: ButtonsAgregator) {
    throwIfNull(drawingBoard, "Drawing board cannot be null");
    throwIfNull(buttonsAgregator, "Buttons agregator cannot be null");

    this.drawingBoard = drawingBoard;
    this.buttonsAgregator = buttonsAgregator;

    this.cut = new CutImpl(drawingBoard);
    this.ddaLineDrawer = new DDA(drawingBoard);
    this.cohenSutherland = new CohenSutherland(this.cut, this.ddaLineDrawer);
  }

  private handleDrawLineActionOnMouseUp() {
    if (this.actionToExecute !== "drawALine") return;

    if (this.cut.isDrawnOnScreen) {
      this.cohenSutherland.drawLineOnCut(this.startPoint!, this.endPoint!);
    } else {
      this.ddaLineDrawer.drawLineBetween(this.startPoint!, this.endPoint!);
    }
  }

  private handleDefineACutActionOnMouseUp() {
    this.cut.drawSelf({
      topLeftCorner: this.startPoint!,
      rightBottomCorner: this.endPoint!,
    });
  }

  private handleMouseDownOnDrawingBoard: MouseEventHandler = (event) => {
    if (!this.startPoint) {
      this.startPoint = new Point(event.x, event.y);
      return;
    }

    this.endPoint = new Point(event.x, event.y);

    if (this.actionToExecute === "drawALine") {
      this.handleDrawLineActionOnMouseUp();
    } else {
      this.handleDefineACutActionOnMouseUp();
    }

    this.startPoint = null;
    this.endPoint = null;
  };

  private onDrawLineButtonClick: MouseEventHandler = () => {
    this.actionToExecute = "drawALine";
  };

  private onDefineCutButtonClick: MouseEventHandler = () => {
    this.actionToExecute = "drawACut";
  };

  private onClearScreenButtonClick: MouseEventHandler = () => {
    this.cut.removeFromScreen();
    this.drawingBoard.clearContent();
  };

  setup() {
    this.drawingBoard.setMouseDownEventHandler(
      this.handleMouseDownOnDrawingBoard
    );

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
