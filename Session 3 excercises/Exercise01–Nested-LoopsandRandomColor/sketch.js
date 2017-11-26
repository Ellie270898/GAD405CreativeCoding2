let size = 50;

function setup() {
  createCanvas (500, 500);
  noLoop();
}

function draw() {
  fill(215, 200, 170);

//run the nested loop for x and y
for (let y=0; y <10; y++) {
  for (let x = 0; x < 10; x++) {
    //Draw the shape at the corresponding postion
    rect(size * x, size * y, size, size);
   }
  }
function draw() {
  quad(38, 31, 86, 20, 69, 63, 30, 76);
}

  translate(width/2, height/2);
  rotate(PI/3.0);
  rect(-26, -26, 52, 52);

 for (var i = 0; i < 100; i++) {
  var r = random(-50, 50);
  line(50,i,50+r,i);
}
