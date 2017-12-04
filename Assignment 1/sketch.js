function Setup() {
createCanvas(594, 841);
//background(0,0,0);
}

function draw(){
background(0,0,0);

//star();

//push();
//translate(random(width), random(height));
// star();
//pop();
//noLoop();
}

for(let i=0; i<100; i++){
push();
translate(random(width), random(height));
star(i);
pop();
}


function star(){
  fill(255,255,255);
ellipse(5, 5, 5, 5);
}
