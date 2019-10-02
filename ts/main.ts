let current = 1;
let count = 0;
enum Num {
  a = 1,
  b,
  c,
}
const init: any = {
  a: [5, 5],
  b: [460, 5],
  c: [230, 300],
};

let d = [240, 160];

let canvas: HTMLCanvasElement = document.getElementById("myCanvas");
canvas.width = 480;
canvas.height = 320;
let ctx = canvas.getContext("2d")!;
const { a, b, c } = init;
ctx.beginPath();
ctx.arc(a[0], a[1], 5, 0, Math.PI * 2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(b[0], b[1], 5, 0, Math.PI * 2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(c[0], c[1], 5, 0, Math.PI * 2, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

const counter = document.getElementById("count");

setInterval(() => {
  count = count + 1;
  const currentDot = Math.floor(Math.random() * 3 + 1);
  const x = init[Num[currentDot]];
  const newItem = [Math.abs(x[0] + d[0]) / 2, Math.abs(x[1] + d[1]) / 2];
  d = newItem;

  ctx.beginPath();
  ctx.arc(newItem[0], newItem[1], 1, 0, Math.PI * 2, false);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
  counter.textContent = count;
}, 1);
