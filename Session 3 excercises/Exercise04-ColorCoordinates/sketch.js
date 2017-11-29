function setup() {
  createCanvas(400,400)
  stroke(0)

}

function draw() {
  background(0);

  //first square
  fill(mouseX, mouseY, 255, 155, 100)
  rect(0, 0, 400, 400)
  noFill()

  //second square
  fill(mouseX, mouseY, 125, 155, 175)
  rect(200, 0, 400, 400)
  noFill()

  //third square
  fill(mouseX, mouseY, 255, 155, 100)
  rect(0, 0, 400, 400)
  noFill()

  //fourth square
  fill(mouseX, mouseY, 50, 85, 125)
  rect(0, 200, 400, 400)
  noFill()
}
