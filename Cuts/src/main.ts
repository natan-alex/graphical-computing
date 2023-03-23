import { Manager } from "./managers/manager";
import { Canvas } from "./components/canvas";
import { ActionTriggers } from "./components/actionTriggers";

function main() {
  const canvas = new Canvas();
  const actionTriggers = new ActionTriggers();
  const manager = new Manager(canvas, actionTriggers);

  manager.setup();
}

window.addEventListener("DOMContentLoaded", main);
