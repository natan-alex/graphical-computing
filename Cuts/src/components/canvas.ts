/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { DrawingBoard, SetPixelParams } from "../contracts/drawingBoard";

import { throwIfNull } from "../utils/exceptions";

export class Canvas implements DrawingBoard {
  private readonly element: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;

  private readonly borderWidth: number;
  private readonly containerPadding: number;

  constructor() {
    const element = document.getElementById("canvas") as HTMLCanvasElement;
    const context = element?.getContext("2d");

    throwIfNull(element, "Canvas element cannot be null");
    throwIfNull(context, "Canvas must have a 2d context");

    this.element = element;
    this.context = context!;

    this.borderWidth = this.getElementBorderWidth();
    this.containerPadding = this.getContainerPadding();
  }

  private getContainerPadding() {
    const container = document.getElementById("canvas-container");

    throwIfNull(container, "Canvas container element was not found");

    const computedStyle = window.getComputedStyle(container!, null);

    return parseInt(computedStyle.getPropertyValue("padding"));
  }

  private getElementBorderWidth() {
    const computedStyle = window.getComputedStyle(this.element, null);

    return parseInt(computedStyle.getPropertyValue("border-width"));
  }

  private addMouseDownHandler() {
    this.element.addEventListener("mousedown", (event) => {
      this.setPixel({ x: event.x, y: event.y });
    });
  }

  setup() {
    this.element.width = window.innerWidth - 20;
    this.element.height = window.innerHeight * 0.85;

    this.addMouseDownHandler();
  }

  clearContent() {
    this.context.clearRect(0, 0, this.element.width, this.element.height);
  }

  setPixel(params: SetPixelParams) {
    const x = params.x - this.borderWidth - this.containerPadding;
    const y = params.y - this.borderWidth - this.containerPadding;

    if (params.color) {
      this.context.fillStyle = params.color;
    }

    this.context.fillRect(x, y, 2, 2);
  }
}
