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
for(let i=0; i<700; i++){
push();
translate(random(width), random(height));
star(i);
pop();

 }
}


function star(){
  fill(255,255,255);
  //Opacity(random());
  ellipse(3,3,3,3);

}
