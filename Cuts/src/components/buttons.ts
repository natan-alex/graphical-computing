import { DrawingBoard } from "../contracts/drawingBoard";

import { throwIfNull } from "../utils/exceptions";

export class Buttons {
  private readonly drawingBoard: DrawingBoard;

  private readonly drawLineButton: HTMLButtonElement;
  private readonly defineCutButton: HTMLButtonElement;
  private readonly clearScreenButton: HTMLButtonElement;

  constructor(drawingBoard: DrawingBoard) {
    const drawLineButton = document.getElementById("draw-lines") as HTMLButtonElement;
    const defineCutButton = document.getElementById("define-cut") as HTMLButtonElement;
    const clearScreenButton = document.getElementById("clear-screen") as HTMLButtonElement;

    throwIfNull(drawingBoard, "Drawing board cannot be null");
    throwIfNull(drawLineButton, "Draw line button element was not found on dom");
    throwIfNull(defineCutButton, "Define cut button element was not found on dom");
    throwIfNull(clearScreenButton, "Clear screen button element was not found on dom");

    this.drawingBoard = drawingBoard;
    this.drawLineButton = drawLineButton;
    this.defineCutButton = defineCutButton;
    this.clearScreenButton = clearScreenButton;
  }

  private addClickHandlerToClearScreenButton() {
    this.clearScreenButton.addEventListener("click", () => {
      this.drawingBoard.clearContent();
    });
  }

  private addClickHandlerToDrawLineButton() {
    this.drawLineButton.addEventListener("click", (event) => {
      console.log("event: ", event);
    });
  }

  private addClickHandlerDefineCutButton() {
    this.defineCutButton.addEventListener("click", (event) => {
      console.log("event: ", event);
    });
  }

  public setup() {
    this.addClickHandlerDefineCutButton();
    this.addClickHandlerToDrawLineButton();
    this.addClickHandlerToClearScreenButton();
  }
}
