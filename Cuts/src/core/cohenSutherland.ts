/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Point } from "./point";

import { Cut } from "../contracts/cut";
import { LineDrawer } from "../contracts/lineDrawer";

import { throwIfNull } from "../utils/exceptions";

export class CohenSutherland {
  private readonly cut: Cut;
  private readonly lineDrawer: LineDrawer;

  private currentStartPoint: Point | null = null;
  private currentEndPoint: Point | null = null;

  private intersection: Point | null = null;

  private regionCodeOutOfCut = 0;

  private startPointRegionCode = 0;
  private endPointRegionCode = 0;

  private cutBounds: {
    minimumX: number;
    minimumY: number;
    maximumX: number;
    maximumY: number;
  } | null = null;

  constructor(cut: Cut, lineDrawer: LineDrawer) {
    throwIfNull(cut, "Cut cannot be null");
    throwIfNull(lineDrawer, "Line drawer cannot be null");

    this.cut = cut;
    this.lineDrawer = lineDrawer;
  }

  private calculateAndSetCutBounds() {
    throwIfNull(this.cut.corners, "Cut must provide it's corners");

    const { topLeft, rightBottom } = this.cut.corners!;

    this.cutBounds! = {
      minimumX: topLeft.x < rightBottom.x ? topLeft.x : rightBottom.x,
      maximumX: topLeft.x > rightBottom.x ? topLeft.x : rightBottom.x,
      minimumY: topLeft.y < rightBottom.y ? topLeft.y : rightBottom.y,
      maximumY: topLeft.y > rightBottom.y ? topLeft.y : rightBottom.y,
    };
  }

  private setCurrentPoints(startPoint: Point, endPoint: Point) {
    this.currentStartPoint = Point.clone(startPoint);
    this.currentEndPoint = Point.clone(endPoint);
  }

  private calculateAndSetRegionCodes() {
    this.startPointRegionCode = this.calculateRegionCodeFor(
      this.currentStartPoint!
    );

    this.endPointRegionCode = this.calculateRegionCodeFor(
      this.currentEndPoint!
    );
  }

  private calculateIntersectionWhenRegionCodeFirstBitIsSet() {
    return new Point(
      this.cutBounds!.minimumX,
      this.currentStartPoint!.y +
      ((this.currentEndPoint!.y - this.currentStartPoint!.y) *
        (this.cutBounds!.minimumX - this.currentStartPoint!.x)) /
      (this.currentEndPoint!.x - this.currentStartPoint!.x)
    );
  }

  private calculateIntersectionWhenRegionCodeSecondBitIsSet() {
    return new Point(
      this.cutBounds!.maximumX,
      this.currentStartPoint!.y +
      ((this.currentEndPoint!.y - this.currentStartPoint!.y) *
        (this.cutBounds!.maximumX - this.currentStartPoint!.x)) /
      (this.currentEndPoint!.x - this.currentStartPoint!.x)
    );
  }

  private calculateIntersectionWhenRegionCodeThirdBitIsSet() {
    return new Point(
      this.currentStartPoint!.x +
      ((this.currentEndPoint!.x - this.currentStartPoint!.x) *
        (this.cutBounds!.minimumY - this.currentStartPoint!.y)) /
      (this.currentEndPoint!.y - this.currentStartPoint!.y),
      this.cutBounds!.minimumY
    );
  }

  private calculateIntersectionWhenRegionCodeFourthBitIsSet() {
    return new Point(
      this.currentStartPoint!.x +
      ((this.currentEndPoint!.x - this.currentStartPoint!.x) *
        (this.cutBounds!.maximumY - this.currentStartPoint!.y)) /
      (this.currentEndPoint!.y - this.currentStartPoint!.y),
      this.cutBounds!.maximumY
    );
  }

  private calculateAndSetIntersection() {
    if ((this.regionCodeOutOfCut & 0b1) !== 0) {
      this.intersection =
        this.calculateIntersectionWhenRegionCodeFirstBitIsSet();
    } else if ((this.regionCodeOutOfCut & 0b10) !== 0) {
      this.intersection =
        this.calculateIntersectionWhenRegionCodeSecondBitIsSet();
    } else if ((this.regionCodeOutOfCut & 0b100) !== 0) {
      this.intersection =
        this.calculateIntersectionWhenRegionCodeThirdBitIsSet();
    } else if ((this.regionCodeOutOfCut & 0b1000) !== 0) {
      this.intersection =
        this.calculateIntersectionWhenRegionCodeFourthBitIsSet();
    }
  }

  private handleSomeOfTheCurrentPointsPartiallyInsideCut() {
    this.regionCodeOutOfCut =
      this.startPointRegionCode !== 0
        ? this.startPointRegionCode
        : this.endPointRegionCode;

    this.calculateAndSetIntersection();

    if (this.regionCodeOutOfCut === this.startPointRegionCode) {
      this.currentStartPoint!.x = this.intersection!.x;
      this.currentStartPoint!.y = this.intersection!.y;
    } else {
      this.currentEndPoint!.x = this.intersection!.x;
      this.currentEndPoint!.y = this.intersection!.y;
    }
  }

  private calculateRegionCodeFor(point: Point) {
    let code = 0;

    if (point.x < this.cutBounds!.minimumX) code += 1;
    if (point.x > this.cutBounds!.maximumX) code += 2;
    if (point.y < this.cutBounds!.minimumY) code += 4;
    if (point.y > this.cutBounds!.maximumY) code += 8;

    return code;
  }

  private areCurrentPointsCompletelyInsideCut() {
    return this.startPointRegionCode === 0 && this.endPointRegionCode === 0;
  }

  private areCurrentPointsCompletelyOutOfCut() {
    return (this.startPointRegionCode & this.endPointRegionCode) !== 0;
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

  drawLineOnCut(startPoint: Point, endPoint: Point) {
    throwIfNull(startPoint, "Start point cannot be null");
    throwIfNull(endPoint, "End point cannot be null");

    this.setCurrentPoints(startPoint, endPoint);
    this.calculateAndSetCutBounds();

    let canDrawLineOnCut = false;
    let areCurrentPointsCompletelyInsideOrOutOfCut = false;

    while (!areCurrentPointsCompletelyInsideOrOutOfCut) {
      this.calculateAndSetRegionCodes();

      if (this.areCurrentPointsCompletelyInsideCut()) {
        canDrawLineOnCut = true;
        areCurrentPointsCompletelyInsideOrOutOfCut = true;
      } else if (this.areCurrentPointsCompletelyOutOfCut()) {
        areCurrentPointsCompletelyInsideOrOutOfCut = true;
      } else {
        this.handleSomeOfTheCurrentPointsPartiallyInsideCut();
      }
    }

    if (canDrawLineOnCut) {
      this.drawLineOnCutFromCurrentStartPointToCurrentEndPoint();
    }
  }
}
