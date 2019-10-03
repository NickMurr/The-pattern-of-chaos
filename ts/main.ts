import Canvas from "./Counter";

// const c = new Canvas({
//   dimensions: { x: 1900, y: 900 },
//   canvasId: "myCanvas",
//   init: {
//     a: [5, 5],
//     b: [1875, 5],
//     c: [950, 895],
//   },
//   start: [240, 160],
// });

const c = new Canvas({
  dimensions: { x: 1900, y: 900 },
  canvasId: "myCanvas",
  init: {
    a: [950, 5],
    b: [1875, 895],
    c: [5, 895],
  },
  start: [240, 160],
});

console.log(c.initValue);
setInterval(() => {
  c.drawDots();
}, 1);

setTimeout(() => {
  c.setInit({ a: [5, 5] });
  console.log(c.init);
}, 5000);
