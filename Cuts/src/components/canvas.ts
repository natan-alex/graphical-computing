/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Point } from "../core/point";
import { MouseEventHandler } from "../common/types";
import { DrawingBoard, DrawRectangleParams, SetPixelParams } from "../contracts/drawingBoard";

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

    this.setup();
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

  private setup() {
    this.element.width = window.innerWidth - 20;
    this.element.height = window.innerHeight * 0.85;
  }

  private getPointConsideringBorderAndPaddings(point: Point): Point {
    const x = point.x - this.borderWidth - this.containerPadding;
    const y = point.y - this.borderWidth - this.containerPadding;

    return new Point(x, y);
  }

  clearContent() {
    this.context.clearRect(0, 0, this.element.width, this.element.height);
  }

  setPixel(params: SetPixelParams) {
    const point = this.getPointConsideringBorderAndPaddings(params.atPoint);

    if (params.color) {
      this.context.fillStyle = params.color;
    }

    this.context.fillRect(point.x, point.y, 1, 1);
  }

  setClickEventHandler(handler: MouseEventHandler): void {
    this.element.onclick = (event) => {
      if (handler) handler(event);
    };
  }

  drawRectangle(params: DrawRectangleParams): void {
    const point = this.getPointConsideringBorderAndPaddings(params.leftCorner);

    if (params.color) {
      this.context.fillStyle = params.color;
    }

    this.context.strokeRect(point.x, point.y, params.width, params.height);
  }
}
