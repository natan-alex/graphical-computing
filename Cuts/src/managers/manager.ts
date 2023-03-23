/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DDA } from "../core/dda";
import { Point } from "../core/point";
import { LiangBarsky } from "../core/liangBarsky";
import { CohenSutherland } from "../core/cohenSutherland";

import { Cut } from "../contracts/cut";
import { LineDrawer } from "../contracts/lineDrawer";
import { DrawingBoard } from "../contracts/drawingBoard";
import { CutLineDrawer } from "../contracts/cutLineDrawer";

import { Cut as CutImpl } from "../components/cut";
import { ActionTriggers } from "../contracts/actionTriggers";

import { throwIfNull } from "../utils/exceptions";
import { Bresenham } from "../core/bresenham";

enum Actions {
  DrawCut,
  DrawLines,
}

export class Manager {
  private readonly cut: Cut;
  private readonly drawingBoard: DrawingBoard;
  private readonly actionTriggers: ActionTriggers;

  private lineDrawer: LineDrawer;
  private cutLineDrawer: CutLineDrawer;

  private startPoint: Point | null = null;
  private endPoint: Point | null = null;

  private actionToExecute = Actions.DrawLines;

  constructor(drawingBoard: DrawingBoard, actionTriggers: ActionTriggers) {
    throwIfNull(drawingBoard, "Drawing board cannot be null");
    throwIfNull(actionTriggers, "Action triggers cannot be null");

    this.drawingBoard = drawingBoard;
    this.actionTriggers = actionTriggers;

    this.cut = new CutImpl(drawingBoard);
    this.lineDrawer = new DDA(drawingBoard);
    this.cutLineDrawer = new CohenSutherland(this.cut, this.lineDrawer);
  }

  private handleDrawLinesAction() {
    if (this.cut.isDrawnOnScreen) {
      this.cutLineDrawer.drawLineOnCut(this.startPoint!, this.endPoint!);
    } else {
      this.lineDrawer.drawLineBetween(this.startPoint!, this.endPoint!);
    }
  }

  private handleDrawCutAction() {
    this.cut.removeFromScreen();

    this.cut.drawSelf({
      topLeftCorner: this.startPoint!,
      rightBottomCorner: this.endPoint!,
    });
  }

  private handleClickOnDrawingBoard(event: MouseEvent) {
    if (!this.startPoint) {
      this.startPoint = new Point(event.x, event.y);
      return;
    }

    this.endPoint = new Point(event.x, event.y);

    if (this.actionToExecute === Actions.DrawLines) {
      this.handleDrawLinesAction();
    } else {
      this.handleDrawCutAction();
    }

    this.startPoint = null;
    this.endPoint = null;
  }

  private handleDrawCutActionTriggered() {
    this.actionToExecute = Actions.DrawCut;
  }

  private handleClearScreenActionTriggered() {
    this.cut.removeFromScreen();
    this.drawingBoard.clearContent();
  }

  private handleDDASelectedToDrawLinesActionTriggered() {
    this.actionToExecute = Actions.DrawLines;
    this.lineDrawer = new DDA(this.drawingBoard);
  }

  private handleBresenhamSelectedToDrawLinesActionTriggered() {
    this.actionToExecute = Actions.DrawLines;
    this.lineDrawer = new Bresenham(this.drawingBoard);
  }

  private handleLiangBarskySelectedToDrawLineOnCutActionTriggered() {
    this.actionToExecute = Actions.DrawLines;
    this.cutLineDrawer = new LiangBarsky(this.cut, this.lineDrawer);
  }

  private handleCohenSutherlandSelectedToDrawLineOnCutActionTriggered() {
    this.actionToExecute = Actions.DrawLines;
    this.cutLineDrawer = new CohenSutherland(this.cut, this.lineDrawer);
  }

  setup() {
    this.drawingBoard.addEventListener("click", (e) => {
      this.handleClickOnDrawingBoard(e);
    });
    this.actionTriggers.handleDrawCutActionTriggered(() => {
      this.handleDrawCutActionTriggered();
    });
    this.actionTriggers.handleClearScreenActionTriggered(() => {
      this.handleClearScreenActionTriggered();
    });
    this.actionTriggers.handleDDASelectedToDrawLinesActionTriggered(() => {
      this.handleDDASelectedToDrawLinesActionTriggered();
    });
    this.actionTriggers.handleBresenhamSelectedToDrawLinesActionTriggered(
      () => {
        this.handleBresenhamSelectedToDrawLinesActionTriggered();
      }
    );
    this.actionTriggers.handleLiangBarskySelectedToDrawLineOnCutActionTriggered(
      () => {
        this.handleLiangBarskySelectedToDrawLineOnCutActionTriggered();
      }
    );
    this.actionTriggers.handleCohenSutherlandSelectedToDrawLineOnCutActionTriggered(
      () => {
        this.handleCohenSutherlandSelectedToDrawLineOnCutActionTriggered();
      }
    );
  }
}
