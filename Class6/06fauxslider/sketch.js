var slidy = new slider(50, 50, 100, 100);

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  slidy.draw();
  text(slidy.value, 50, 30);
}

function mouseDragged()
{
  slidy.update();
}