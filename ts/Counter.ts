export interface ICanvas {
  dimensions: { x: number; y: number };
  canvasId: string;
  init: { [key: string]: [number, number] };
  start: [number, number];
}

export default class Canvas {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public init: { [key: string]: [number, number] };
  public startPoint: [number, number];
  public initCount: number;

  constructor(options: ICanvas) {
    this.canvas = document.getElementById(options.canvasId)!;
    this.canvas.width = options.dimensions.x;
    this.canvas.height = options.dimensions.y;
    this.ctx = this.canvas.getContext("2d")!;
    this.init = options.init;
    this.initCount = Object.keys(this.init).length;
    this.startPoint = options.start;
    this.drawInit();
    this.drawDots();
  }

  public get initValue(): { [key: string]: [number, number] } {
    return this.init;
  }

  public setInit(v: any) {
    const newInit = { ...this.init, ...v };
    this.init = newInit;
  }

  public drawInit() {
    Object.keys(this.init).forEach((i) => {
      this.ctx.beginPath();
      this.ctx.arc(this.init[i][0], this.init[i][1], 5, 0, Math.PI * 2, false);
      this.ctx.fillStyle = "red";
      this.ctx.fill();
      this.ctx.closePath();
    });
  }

  public random() {
    return Math.floor(Math.random() * this.initCount + 1);
  }

  public publicRandomCoordinates() {
    return this.init[Object.keys(this.init)[this.random() - 1]];
  }

  public drawDots() {
    // for (let i = 0; i < 20000; i++) {
    const x = this.publicRandomCoordinates();
    const d = this.startPoint;
    const newItem = [Math.abs(x[0] + d[0]) / 2, Math.abs(x[1] + d[1]) / 2];
    this.startPoint = newItem;
    this.ctx.beginPath();
    this.ctx.arc(newItem[0], newItem[1], 1, 0, Math.PI * 2, false);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
    this.ctx.closePath();
    // }
  }

  public draw() {
    for (let i = 0; i < 100000; i++) {
      this.drawDots();
    }
  }
}
