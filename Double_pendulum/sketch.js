let r1 = 125;
let r2 = 125;

let m1 = 10;
let m2 = 10;

let a1 = 1.5;
let a2 = 0;

let a1_v = 0;
let a2_v = 0;

let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let px2 = 0;
let py2 = 0;

let g = 1;
let buffer;

function setup() {
  createCanvas(500, 500);
  strokeWeight(4);
  buffer = createGraphics(width, height);
}

function draw() {
  background(220);
  stroke(0);
  image(buffer, 0, 0, width, height);
  
  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a1_a = (num1 + num2 + num3 * num4) / den;

  num1 = 2 * sin(a1 - a2);
  num2 = (a1_v * a1_v * r1 * (m1 + m2));
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
  den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a2_a = (num1 * (num2 + num3 + num4)) / den;
  
  a1_v += a1_a;
  a2_v += a2_a;
  
  a1 += a1_v;
  a2 += a2_v;
  
  x1 = r1*sin(a1)+250;
  y1 = r1*cos(a1)+20;
  x2 = r2*sin(a2)+x1;
  y2 = r2*cos(a2)+y1;
  
  line(250,20,x1,y1);
  line(x1,y1,x2,y2);
  circle(x1,y1,20);
  circle(x2,y2,20);

	if (frameCount > 1) {
    buffer.line(px2, py2, x2, y2);
  }
  
  px2 = x2;
  py2 = y2;
}
