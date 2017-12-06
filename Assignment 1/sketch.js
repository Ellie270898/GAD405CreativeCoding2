let Opacityshape;
let angle = 0;
let speed;
let starParameters = [];

function setup() {
  var canvas = createCanvas(594, 841);
  //background(0,0,0);
  frameRate(60);
  canvas.parent("myContainer");
  canvas.class("myCanvas");
  setupBackgroundStars();
}

function draw(){
  background(0,0,0);
  drawBackgroundStars();
  //This code should create the circular motion for the galaxy.
  angle += 0.001;
  let sinValueX = sin(angle);
  let sinValueY = cos(angle)*0.5;

  let x = map(sinValueX, -1, 1, 0, width-50);
  let y = map(sinValueY, -1, 1, 0, width-50);


  //This code is for the stars and planets that fill the galaxy - These will stay white.
  fill(255, 255, 255);
  noStroke();
  ellipse(25+x, 25+y, 8, 8);
  ellipse(40+x, 2+y, 6, 6);
  ellipse(47+x, 14+y, 6, 6);
  ellipse(31+x, 2+y, 6, 6);
  ellipse(28+x, 7+y, 8, 8);
  ellipse(21+x, 12+y, 3, 3);
  ellipse(50+x, 10+y, 3, 3);
  ellipse(40+x, 12+y, 3, 3);
  ellipse(67+x, 13+y, 4, 4);
  ellipse(58+x, 20+y, 4, 4);
  ellipse(42+x, 13+y, 4, 4);
  ellipse(34+x, 20+y, 4, 4);
  ellipse(34+x, 24+y, 4, 4);
  ellipse(24+x, 34+y, 4, 4);
  ellipse(72+x, 28+y, 4, 4);
  ellipse(74+x, 22+y, 4, 4);
  ellipse(55+x, 55+y, 3, 3);
  ellipse(70+x, 32+y, 3, 3);
  ellipse(77+x, 44+y, 6, 6);
  ellipse(61+x, 32+y, 6, 6);
  ellipse(58+x, 37+y, 2, 2);
  ellipse(51+x, 52+y, 3, 3);
  ellipse(80+x, 40+y, 3, 3);
  ellipse(70+x, 42+y, 3, 3);
  ellipse(97+x, 43+y, 4, 4);
  ellipse(68+x, 30+y, 4, 4);
  ellipse(52+x, 23+y, 4, 4);
  ellipse(44+x, 30+y, 2, 2);
  ellipse(44+x, 34+y, 4, 4);
  ellipse(34+x, 44+y, 4, 4);
  ellipse(82+x, 38+y, 2, 2);
  ellipse(84+x, 32+y, 4, 4);
  ellipse(80+x, -50+y, 8, 8);
  ellipse(40+x, -20+y, 6, 6);
  ellipse(47+x, -14+y, 6, 6);
  ellipse(31+x, -2+y, 6, 6);
  ellipse(28+x, -7+y, 8, 8);
  ellipse(21+x, -12+y, 3, 3);
  ellipse(50+x, -10+y, 3, 3);
  ellipse(40+x, -12+y, 3, 3);
  ellipse(67+x, -13+y, 4, 4);
  ellipse(58+x, -20+y, 4, 4);
  ellipse(42+x, -13+y, 4, 4);
  ellipse(34+x, -20+y, 4, 4);
  ellipse(34+x, -24+y, 4, 4);
  ellipse(24+x, -34+y, 4, 4);
  ellipse(72+x, -28+y, 4, 4);
  ellipse(74+x, -22+y, 4, 4);
  ellipse(80+x, -10+y, 8, 8);
  ellipse(40+x, -35+y, 6, 6);
  ellipse(47+x, -29+y, 6, 6);
  ellipse(31+x, -6+y, 6, 6);
  ellipse(28+x, -15+y, 8, 8);
  ellipse(21+x, -23+y, 3, 3);
  ellipse(50+x, -25+y, 3, 3);
  ellipse(40+x, -17+y, 3, 3);
  ellipse(67+x, -14+y, 4, 4);
  ellipse(58+x, -36+y, 4, 4);
  ellipse(42+x, -26+y, 4, 4);
  ellipse(34+x, -34+y, 4, 4);
  ellipse(34+x, -37+y, 4, 4);
  ellipse(24+x, -50+y, 4, 4);
  ellipse(72+x, -37+y, 4, 4);
  ellipse(74+x, -36+y, 4, 4);

  ellipse(100+x, -100+y, 8, 8);
  ellipse(120+x, -70+y, 6, 6);
  ellipse(130+x, -50+y, 6, 6);
  ellipse(124+x, -78+y, 4, 4);
  ellipse(150+x, -30+y, 8, 8);
  ellipse(104+x, -40+y, 3, 3);
  ellipse(112+x, -60+y, 3, 3);
  ellipse(180+x, -70+y, 3, 3);
  ellipse(130+x, -13+y, 4, 4);
  ellipse(200+x, -40+y, 4, 4);
  ellipse(170+x, -58+y, 4, 4);
  ellipse(250+x, -200+y, 4, 4);
  ellipse(180+x, -24+y, 4, 4);
  ellipse(137+x, -104+y, 4, 4);
  ellipse(72+x, -28+y, 4, 4);
  ellipse(74+x, -22+y, 4, 4);
 }
function drawBackgroundStars(){
 //create 100 stars in random positions on the canvas
 for(let i=0; i < 1000; i++){

   push();
   translate(starParameters[i].x,starParameters[i].y);
   //console.log (starParameters[i]);
   drawStar();
   pop();
   //noLoop();
  }




 //This is the code for a singular star. The opacity is random, the colour is white and the size is 3 pixels.
 function drawStar(){
   Opacityshape=random(255)
   fill(255,255,255,Opacityshape);
   //Opacity(random());
   ellipse(3,3,3,3);
   }
 }

 function setupBackgroundStars() {
   for(let i=0; i < 1000; i++){
     let s = {x: random(0, width), y: random(0, height)};
     starParameters.push(s);
   }

 }
