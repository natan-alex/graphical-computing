import { EventHandler } from "../common/types";

export interface ActionTriggers {
  handleDrawCutActionTriggered(handler: EventHandler): void;

  handleClearScreenActionTriggered(handler: EventHandler): void;

  handleDDASelectedToDrawLinesActionTriggered(
    handler: EventHandler
  ): void;

  handleBresenhamSelectedToDrawLinesActionTriggered(
    handler: EventHandler
  ): void;

  handleLiangBarskySelectedToDrawLineOnCutActionTriggered(
    handler: EventHandler
  ): void;

  handleCohenSutherlandSelectedToDrawLineOnCutActionTriggered(
    handler: EventHandler
  ): void;
}
