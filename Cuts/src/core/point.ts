export class Point {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distanceTo(otherPoint: Point): number {
    const xAxisDifference = Math.abs(otherPoint.x - this.x);
    const yAxisDifference = Math.abs(otherPoint.y - this.y);
    const doubleXAxisDifference = xAxisDifference * xAxisDifference;
    const doubleYAxisDifference = yAxisDifference * yAxisDifference;
    return Math.sqrt(doubleXAxisDifference + doubleYAxisDifference);
  }
}
