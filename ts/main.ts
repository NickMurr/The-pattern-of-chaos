import Canvas from "./Canvas";

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
  canvasId: "myCanvas",
  dimensions: { x: 1900, y: 900 },
  init: {
    a: [950, 5],
    b: [1875, 895],
    c: [5, 895],
  },
  start: [240, 160],
});

setInterval(() => {
  c.drawDots();
}, 1);

setTimeout(() => {
  c.setInit({ a: [5, 5] });
}, 5000);
