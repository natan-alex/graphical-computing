/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Point } from "../core/point";

import {
  ClearRectangleParams,
  DrawingBoard,
  DrawRectangleParams,
  SetPixelParams,
} from "../contracts/drawingBoard";

import { throwIfNull } from "../utils/exceptions";

export class Canvas implements DrawingBoard {
  private readonly container: HTMLDivElement;
  private readonly element: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;

  private readonly borderWidth: number;
  private readonly containerPadding: number;

  constructor() {
    const element = document.getElementById("canvas") as HTMLCanvasElement;
    const container = document.getElementById("canvas-container") as HTMLDivElement;
    const context = element?.getContext("2d");

    throwIfNull(element, "Canvas element cannot be null");
    throwIfNull(context, "Canvas must have a 2d context");
    throwIfNull(container, "Canvas container element was not found");

    this.element = element;
    this.context = context!;
    this.container = container;

    this.borderWidth = this.getElementBorderWidth();
    this.containerPadding = this.getContainerPadding();

    this.setElementWidthAndHeight();
  }

  private setElementWidthAndHeight() {
    this.element.width =
      this.container.clientWidth -
      this.containerPadding -
      this.containerPadding;

    this.element.height =
      this.container.clientHeight -
      this.containerPadding -
      this.containerPadding;
  }

  private getContainerPadding() {
    const computedStyle = window.getComputedStyle(this.container, null);

    return parseInt(computedStyle.getPropertyValue("padding"));
  }

  private getElementBorderWidth() {
    const computedStyle = window.getComputedStyle(this.element, null);

    return parseInt(computedStyle.getPropertyValue("border-width"));
  }

  private translatePoint(point: Point): Point {
    const x = point.x - this.borderWidth - this.containerPadding;
    const y = point.y - this.borderWidth - this.containerPadding;

    return new Point(x, y);
  }

  clearContent() {
    this.context.clearRect(0, 0, this.element.width, this.element.height);
  }

  setPixel(params: SetPixelParams) {
    const point = this.translatePoint(params.atPoint);

    if (params.color) {
      this.context.fillStyle = params.color;
    }

    this.context.fillRect(point.x, point.y, 1, 1);
  }

  drawRectangle(params: DrawRectangleParams): void {
    const topLeftCorner = this.translatePoint(params.topLeftCorner);
    const rightBottomCorner = this.translatePoint(params.rightBottomCorner);

    if (params.color) {
      this.context.fillStyle = params.color;
    }

    const width = rightBottomCorner.x - topLeftCorner.x;
    const height = rightBottomCorner.y - topLeftCorner.y;

    this.context.strokeRect(topLeftCorner.x, topLeftCorner.y, width, height);
  }

  clearRectangle(params: ClearRectangleParams): void {
    const topLeftCorner = this.translatePoint(params.topLeftCorner);
    const rightBottomCorner = this.translatePoint(params.rightBottomCorner);

    const x = topLeftCorner.x - this.borderWidth;
    const y = topLeftCorner.y - this.borderWidth;

    const width =
      rightBottomCorner.x -
      topLeftCorner.x +
      this.borderWidth +
      this.borderWidth;

    const height =
      rightBottomCorner.y -
      topLeftCorner.y +
      this.borderWidth +
      this.borderWidth;

    this.context.clearRect(x, y, width, height);
  }

  addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (event: HTMLElementEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions | undefined
  ): void {
    this.element.addEventListener(type, listener, options);
  }
}
