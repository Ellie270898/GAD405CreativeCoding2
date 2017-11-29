let x;
let y;

function setup() {
  createCanvas(400, 400)
  x = random(width);
  y = random(height);
}

function draw() {
  background (100);

//"++" continue moving
  x++;
  y++;


//if the circle location exceeds the size of the canvas, reset it to 0
  if (x>width) x = 0;
  if (y>height) y = 0;

  ellipse(x, y, 50, 50);
  fill(255);
  text(x, width/2, height/2-20)
  text(y, width/2,height/2+20)

}
