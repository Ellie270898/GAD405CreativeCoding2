let x;
let xReverse;

function setup(){
  createCanvas(400, 400)
  textSize(18);
}

function draw() {
  background (255);

  x = mouseX;
  xReverse = map(moouseX, 0, 500, 500, 0);

  fill(255, 0, 0)
  rect(x, 0, 10, 200);
  rect(xRevese, 200, 10, 200);

  text(x, x+20, 100);
  text(xReverse, xReverse+20, 300);

}
