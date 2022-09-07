// x and y position of the bob
let ux = 400; // 300 
let uy = 50; // 100
let px = 0;
let py = 0;

// x and y position of the anchor point
let tx = 0;
let ty = 0;

let k = 0.1; // spring constant
let m = 20; // mass
let b = 0; // damping constant
let g = 1; // acceleration due to gravity

let r = uy; // length at equilibrium
let l = 0; // length of the spring
let s = 0; // displacement from rest length when spring is stretched

let acc_x = 0;
let vel_x = 0;
let acc_y = 0;
let vel_y = 0;

let buffer;

function setup() {
  createCanvas(800,700);
  strokeWeight(4);
  buffer = createGraphics(width,height);
}

function draw() {
  background(220);
  translate(width/2,30);
  image(buffer, -400, 0, width, height);
  
  l = sqrt((ux-tx)*(ux-tx)+(uy-ty)*(uy-ty));
  s = l-r;
  
  acc_x = -k/m*s*((ux-tx)/l)-b/m*vel_x;
  acc_y = g-k/m*s*((uy-ty)/l)-b/m*vel_y;
  
  vel_x += acc_x;
  vel_y += acc_y;
  
  ux += vel_x;
  uy += vel_y;
  
  if (frameCount>1) {
    buffer.line(ux+width/2,uy,px+width/2,py);
  }
  
  line(0,0,ux,uy);
  circle(ux,uy,40);
  
  px = ux;
  py = uy;
}
