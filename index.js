let canvas;

function setup() {
  canvas  = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  drawContent(0);
  background(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
