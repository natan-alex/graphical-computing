import { Canvas } from "./components/canvas";
import { Manager } from "./managers/manager";
import { ButtonsAgregator } from "./components/buttonsAgregator";

function main() {
  const canvas = new Canvas();
  const buttonsAgregator = new ButtonsAgregator();
  const manager = new Manager(canvas, buttonsAgregator);

  manager.setup();
}

window.addEventListener("DOMContentLoaded", main);
