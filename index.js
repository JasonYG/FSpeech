let canvas;
let currentState = 1;

function setup() {
  canvas  = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  changePage(0);
  background(255);
}
function drawBackObjects(State){
  let state = State;
  if(state == 0){

  }
  if(state == 1){
    noStroke();
    fill(200, 200, 200);
    rect(0, 0, windowWidth, windowHeight);
    fill(100, 100, 100);
    rect(0, 0, windowWidth, 95);
  }

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawBackObjects(currentState);
}
