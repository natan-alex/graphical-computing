import { Canvas } from "./components/canvas";
import { Buttons } from "./components/buttons";

function main() {
  const canvas = new Canvas();
  const buttons = new Buttons(canvas);

  canvas.setup();
  buttons.setup();
}

window.addEventListener("DOMContentLoaded", main);
