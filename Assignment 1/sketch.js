let Opacityshape;
let angle = 0;

function setup() {
var canvas = createCanvas(594, 841);
//background(0,0,0);
canvas.parent("myContainer");
canvas.class("myCanvas");
}

function draw(){
//background(0,0,0);
//!!FAILED CODE!!
//star();
//push();
//translate(random(width), random(height));
// star();
//pop();
//noLoop();

//create 100 stars in random positions on the canvas
for(let i=0; i < 1000; i++)
{
  push();
  translate(random(width), random(height));
  star(i);
  pop();
  //noLoop();
}

//This code is for the stars and planets that fill the galaxy.
ellipse(250, 250, 6, 6);
ellipse(253, 260, 6, 6);
ellipse(146, 300, 6, 6);
ellipse(400, 300, 8, 8);

//This code should create the circular motion for the galaxy.

  angle += 0.1;
  let sinValueX = sin(angle);
  let sinValueY = cos(angle)*0.5;

  let x = map(sinValueX, -1, 1, 0, width-50);
  let y = map(sinValueY, -1, 1, 0, width-50);

 fill(255);
 ellipse(25+x, 25+y, 50, 50);

//This is the code for a singular star. The opacity is random, the colour is white and the size is 3 pixels.
function star(){
  Opacityshape=random(255)
  fill(255,255,255,Opacityshape);
  //Opacity(random());
  ellipse(3,3,3,3);
  }
}
