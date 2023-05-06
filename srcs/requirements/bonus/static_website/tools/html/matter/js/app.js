let engine = Matter.Engine.create()
let render = Matter.Render.create({
   element: document.body,
   engine: engine,
   options: {
      width: 1024,
      height: 576,
      wireframes: false,
      background: '#0A0A0A'
   }
});

let ground = Matter.Bodies.rectangle(360 + 375, 525, 750 + (45 * 2), 150, {
   isStatic: true,
   render: { fillStyle: '#141414' }
});

// this is l
let l = Matter.Composites.stack(330 - 90 + 150, 150 - 90, 1, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let l1 = Matter.Composites.stack(330 - 90 + 150, 195 - 90, 1, 3, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#0A0A0A' }
   });
});
let l2 = Matter.Composites.stack(330 - 90 + 195, 150 - 90, 1, 4, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let l3 = Matter.Composites.stack(330 - 90 + 150, 240, 3, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});

//this is E1
let e1 = Matter.Composites.stack(330 - 90 + 330, 150, 3, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let e11 = Matter.Composites.stack(330 - 90 + 330, 195, 2, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#0A0A0A' }
   });
});
let e12 = Matter.Composites.stack(330 - 90 + 330, 240, 3, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let e13 = Matter.Composites.stack(330 - 90 + 420, 195, 1, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let e14 = Matter.Composites.stack(330 - 90 + 330, 150 - 90, 3, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let e15 = Matter.Composites.stack(330 - 90 + 420, 150 - 45, 1, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let e16 = Matter.Composites.stack(330 - 90 + 330, 150 - 45, 2, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#0A0A0A' }
   });
});

//this is E
let e2 = Matter.Composites.stack(330 + 90 + 330, 150, 3, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let e21 = Matter.Composites.stack(330 + 90 + 330, 195, 2, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#0A0A0A' }
   });
});
let e22 = Matter.Composites.stack(330 + 90 + 330, 240, 3, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let e23 = Matter.Composites.stack(330 + 90 + 420, 195, 1, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let e24 = Matter.Composites.stack(330 + 90 + 330, 150 - 90, 3, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let e25 = Matter.Composites.stack(330 + 90 + 420, 150 - 45, 1, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let e26 = Matter.Composites.stack(330 + 90 + 330, 150 - 45, 2, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#0A0A0A' }
   });
});

//this is N
let n = Matter.Composites.stack(330 + 90 + 510, 150 - 90, 1, 2, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let n1 = Matter.Composites.stack(330 + 90 + 555, 195 - 90, 1, 4, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#0A0A0A' }
   });
});
let n2 = Matter.Composites.stack(330 + 90 + 555, 150 - 90, 1, 1, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let n3 = Matter.Composites.stack(330 + 90 + 600, 150 - 90, 1, 5, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#FFFFFF' }
   });
});
let n4 = Matter.Composites.stack(330 + 90 + 510, 240 - 90, 1, 3, 0, 0, function (x, y) {
   return Matter.Bodies.rectangle(x, y, 45, 45, {
      render: { fillStyle: '#0A0A0A' }
   });
});


let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
   mouse: mouse,
   constraint: {
      render: { visible: false }
   }
});
render.mouse = mouse;

Matter.World.add(engine.world, [l, l1, l2, l3, e1, e11, e12, e13, e14, e15, e16, e2, e21, e22, e23, e24, e25, e26, n, n1, n2, n3, n4, ground, mouseConstraint]);
Matter.Engine.run(engine);
Matter.Render.run(render);

var canvas = document.getElementsByTagName('canvas')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;