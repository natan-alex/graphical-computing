/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { throwIfNull } from "../utils/exceptions";

import { Point } from "./point";

import { Cut } from "../contracts/cut";
import { LineDrawer } from "../contracts/lineDrawer";
import { CutLineDrawer } from "../contracts/cutLineDrawer";

export class LiangBarsky implements CutLineDrawer {
  private readonly cut: Cut;
  private readonly lineDrawer: LineDrawer;

  private deltaX = 0;
  private deltaY = 0;

  private u1 = 0;
  private u2 = 0;

  private currentStartPoint: Point | null = null;
  private currentEndPoint: Point | null = null;

  constructor(cut: Cut, lineDrawer: LineDrawer) {
    throwIfNull(cut, "Cut cannot be null");
    throwIfNull(lineDrawer, "Line drawer cannot be null");

    this.cut = cut;
    this.lineDrawer = lineDrawer;
  }

  private setBasicThingsForDrawingOnCut(startPoint: Point, endPoint: Point) {
    this.u1 = 0;
    this.u2 = 1;

    this.deltaX = endPoint.x - startPoint.x;
    this.deltaY = endPoint.y - startPoint.y;

    this.currentStartPoint = Point.clone(startPoint);
    this.currentEndPoint = Point.clone(endPoint);
  }

  private clipTest(p: number, q: number) {
    let result = true;

    if (p < 0) {
      const r = q / p;

      if (r > this.u2) {
        result = false;
      } else if (r > this.u1) {
        this.u1 = r;
      }
    } else if (p > 0) {
      const r = q / p;

      if (r < this.u1) {
        result = false;
      } else if (r < this.u2) {
        this.u2 = r;
      }
    } else if (q < 0) {
      result = false;
    }

    return result;
  }

  private clipTests() {
    return (
      this.clipTest(-this.deltaX, this.currentStartPoint!.x - this.cut.bounds!.minimumX) &&
      this.clipTest(this.deltaX, this.cut.bounds!.maximumX - this.currentStartPoint!.x) &&
      this.clipTest(-this.deltaY, this.currentStartPoint!.y - this.cut.bounds!.minimumY) &&
      this.clipTest(this.deltaY, this.cut.bounds!.maximumY - this.currentStartPoint!.y)
    );
  }

  private drawLineOnCutFromCurrentStartPointToCurrentEndPoint() {
    const lineStartPoint = new Point(
      Math.round(this.currentStartPoint!.x),
      Math.round(this.currentStartPoint!.y)
    );

    const lineEndPoint = new Point(
      Math.round(this.currentEndPoint!.x),
      Math.round(this.currentEndPoint!.y)
    );

    this.lineDrawer.drawLineBetween(lineStartPoint, lineEndPoint);
  }

  drawLineOnCut(startPoint: Point, endPoint: Point): void {
    this.setBasicThingsForDrawingOnCut(startPoint, endPoint);

    if (!this.clipTests()) return;

    if (this.u2 < 1) {
      this.currentEndPoint!.x = this.currentStartPoint!.x + this.u2 * this.deltaX;
      this.currentEndPoint!.y = this.currentStartPoint!.y + this.u2 * this.deltaY;
    }

    if (this.u1 > 0) {
      this.currentStartPoint!.x = this.currentStartPoint!.x + this.u1 * this.deltaX;
      this.currentStartPoint!.y = this.currentStartPoint!.y + this.u1 * this.deltaY;
    }

    this.drawLineOnCutFromCurrentStartPointToCurrentEndPoint();
  }
}
