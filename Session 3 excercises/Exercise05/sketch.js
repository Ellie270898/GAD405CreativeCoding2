let tileSize = 50;

function setup() {
  createCanvas(500, 500); //this is the size of the output window
stroke(255);
}

function draw(){
  background(0); //white background

  var mouse1 = map(mouseY, 0, height, 0, 255); //horizontal
  var mouse2 = map(mouseX, 0, width, 0, 255); //vertical
  var mouse3 = map(mouseY, 0, width, 255, 0); //diagonal

  var color1 = color(255, 37, 54, 255); //this is red
  var color2 = color(36, 194, 203, mouse1);
  var color3 = color(36, 194, 203, mouse2);
  var color4 = color(239, 108, 46, mouse3);

  for(let y =0; y <height; y+=tileSize) {
    for(let x =0; x <width; x+=tileSize) {

      if(mouseX>x && mouseX<x+tileSize && mouseY>y && mouseY<y=tileSize) fill(color1);
      else if (mouseX>x && mouseX<x=+tileSize) fill(color2);
      else if (mouseY<y && mouseY<y=+tileSize) fill(color3);
      else fill(color4);
      rect(x, y, tileSize, tileSize);
    }
  }
}
