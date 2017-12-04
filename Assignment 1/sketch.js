let Opacityshape;
function setup() {
var canvas = createCanvas(594, 841);
//background(0,0,0);
canvas.parent("myContainer");
canvas.class("myCanvas");
}

function draw(){
background(0,0,0);
//!!FAILED CODE!!
//star();
//push();
//translate(random(width), random(height));
// star();
//pop();
noLoop();

//create 100 stars in random positions on the canvas
for(let i=0; i<1000; i++){
push();
translate(random(width), random(height));
star(i);
pop();

 }
}


function star(){
  Opacityshape=random(255)
  fill(255,255,255,Opacityshape);
  //Opacity(random());
  ellipse(3,3,3,3);

}
