let r = 200;
let m = 10;
let a = 1;
let a_v = 0;

let x = 0;
let y = 0;

let g = 1;

function setup() {
  createCanvas(500, 500);
  strokeWeight(4);
}

function draw() {
  background(220);
  stroke(0);
  
	a_a = -(sin(a)*g)/r
  a_v += a_a;
  a += a_v;
  
  x = r*sin(a)+250;
  y = r*cos(a)+20;
  
  line(250,20,x,y);
  circle(x,y,50);
}
