export class Point {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static clone(otherPoint: Point) {
    return new Point(otherPoint.x, otherPoint.y);
  }
}
