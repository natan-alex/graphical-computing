/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { throwIfNull } from "../utils/exceptions";

import { EventHandler } from "../common/types";

import { ActionTriggers as ActionTriggersContract } from "../contracts/actionTriggers";

const buttonsAndIds = {
  drawCut: "draw-cut",
  clearScreen: "clear-screen",
  drawLinesWithDda: "draw-lines-with-dda",
  drawLinesWithBresenham: "draw-lines-with-bresenham",
  drawLinesOnCutWithLiangBarsky: "draw-lines-on-cut-with-liang-barsky",
  drawLinesOnCutWithCohenSutherland: "draw-lines-on-cut-with-cohen-sutherland",
};

type ButtonNames = keyof typeof buttonsAndIds;

type Buttons = { [key in ButtonNames]?: HTMLButtonElement };

export class ActionTriggers implements ActionTriggersContract {
  private readonly buttons: Buttons;

  constructor() {
    this.buttons = Object.entries(buttonsAndIds).reduce<Buttons>(
      (buttons, [name, id]) => {
        const key = name as ButtonNames;
        buttons[key] = this.getButtonElementOrThrow(id);
        return buttons;
      },
      {}
    );
  }

  private getButtonElementOrThrow(id: string) {
    const element = document.getElementById(id) as HTMLButtonElement;

    throwIfNull(element, "An element with id = ' " + id + " ' was not found on DOM");

    return element;
  }

  private addClickEventListenerTo(
    buttonName: ButtonNames,
    listener: () => void
  ) {
    this.buttons[buttonName]!.addEventListener("click", () => {
      if (listener) listener();
    });
  }

  handleDrawCutActionTriggered(handler: EventHandler): void {
    this.addClickEventListenerTo("drawCut", handler);
  }

  handleClearScreenActionTriggered(handler: EventHandler): void {
    this.addClickEventListenerTo("clearScreen", handler);
  }

  handleDDASelectedToDrawLinesActionTriggered(
    handler: EventHandler
  ): void {
    this.addClickEventListenerTo("drawLinesWithDda", handler);
  }

  handleBresenhamSelectedToDrawLinesActionTriggered(
    handler: EventHandler
  ): void {
    this.addClickEventListenerTo("drawLinesWithBresenham", handler);
  }

  handleLiangBarskySelectedToDrawLineOnCutActionTriggered(
    handler: EventHandler
  ): void {
    this.addClickEventListenerTo("drawLinesOnCutWithLiangBarsky", handler);
  }

  handleCohenSutherlandSelectedToDrawLineOnCutActionTriggered(
    handler: EventHandler
  ): void {
    this.addClickEventListenerTo("drawLinesOnCutWithCohenSutherland", handler);
  }
}
