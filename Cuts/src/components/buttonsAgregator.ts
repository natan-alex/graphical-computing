import { MouseEventHandler } from "../common/types";

import { throwIfNull } from "../utils/exceptions";

export class ButtonsAgregator {
  private readonly drawLineButton: HTMLButtonElement;
  private readonly defineCutButton: HTMLButtonElement;
  private readonly clearScreenButton: HTMLButtonElement;

  constructor() {
    const drawLineButton = document.getElementById("draw-lines") as HTMLButtonElement;
    const defineCutButton = document.getElementById("define-cut") as HTMLButtonElement;
    const clearScreenButton = document.getElementById("clear-screen") as HTMLButtonElement;

    throwIfNull(drawLineButton, "Draw line button element was not found on dom");
    throwIfNull(defineCutButton, "Define cut button element was not found on dom");
    throwIfNull(clearScreenButton, "Clear screen button element was not found on dom");

    this.drawLineButton = drawLineButton;
    this.defineCutButton = defineCutButton;
    this.clearScreenButton = clearScreenButton;
  }

  setDrawLineButtonClickEventHandler(handler: MouseEventHandler) {
    this.drawLineButton.onclick = (event) => {
      if (handler) handler(event);
    };
  }

  setDefineCutButtonClickEventHandler(handler: MouseEventHandler) {
    this.defineCutButton.onclick = (event) => {
      if (handler) handler(event);
    };
  }

  setClearScreenButtonClickEventHandler(handler: MouseEventHandler) {
    this.clearScreenButton.onclick = (event) => {
      if (handler) handler(event);
    };
  }
}
