let size = 50;

function setup()
{
  createCanvas (500, 500);
  noLoop();
}

function draw()
{
  fill(215, 200, 170);

//run the nested loop for x and y
  for (let y=0; y <10; y++)
  {
    for (let x = 0; x < 10; x++)
    {
    //Draw the shape at the corresponding postion
      rect(size * x, size * y, size, size);
    }
  }
}
