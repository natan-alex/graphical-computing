/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Point } from "../core/point";
import { MouseEventHandler } from "../common/types";

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
    const container = document.getElementById(
      "canvas-container"
    ) as HTMLDivElement;
    const context = element?.getContext("2d");

    throwIfNull(element, "Canvas element cannot be null");
    throwIfNull(context, "Canvas must have a 2d context");
    throwIfNull(container, "Canvas container element was not found");

    this.element = element;
    this.context = context!;
    this.container = container;

    this.borderWidth = this.getElementBorderWidth();
    this.containerPadding = this.getContainerPadding();

    this.setup();
  }

  private setup() {
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

  setMouseDownEventHandler(handler: MouseEventHandler): void {
    this.element.onmousedown = (event) => {
      if (handler) handler(event);
    };
  }

  setMouseMoveEventHandler(handler: MouseEventHandler): void {
    this.element.onmousemove = (event) => {
      if (handler) handler(event);
    };
  }

  setMouseUpEventHandler(handler: MouseEventHandler): void {
    this.element.onmouseup = (event) => {
      if (handler) handler(event);
    };
  }

  drawRectangle(params: DrawRectangleParams): void {
    const topLeftCorner = this.getPointConsideringBorderAndPaddings(
      params.topLeftCorner
    );

    const rightBottomCorner = this.getPointConsideringBorderAndPaddings(
      params.rightBottomCorner
    );

    if (params.color) {
      this.context.fillStyle = params.color;
    }

    const width = rightBottomCorner.x - topLeftCorner.x;
    const height = rightBottomCorner.y - topLeftCorner.y;

    this.context.strokeRect(topLeftCorner.x, topLeftCorner.y, width, height);
  }

  clearRectangle(params: ClearRectangleParams): void {
    const topLeftCorner = this.getPointConsideringBorderAndPaddings(
      params.topLeftCorner
    );

    const rightBottomCorner = this.getPointConsideringBorderAndPaddings(
      params.rightBottomCorner
    );

    this.context.clearRect(
      topLeftCorner.x - this.borderWidth,
      topLeftCorner.y - this.borderWidth,
      rightBottomCorner.x - topLeftCorner.x + this.borderWidth + this.borderWidth,
      rightBottomCorner.y - topLeftCorner.y + this.borderWidth + this.borderWidth
    );
  }
}
