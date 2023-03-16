export type SetPixelParams = {
  x: number;
  y: number;
  color?: string;
};

export interface DrawingBoard {
  clearContent(): void;

  setPixel(params: SetPixelParams): void;
}
