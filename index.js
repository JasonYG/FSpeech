let canvas;
let currentState = 1;
let animationHandler = -1;
let animationTime = 30;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch");
  changePage(0);
  background(255);
  for (let i = 0; i < "hello world I love cheese".split(" ").length; i++) {
    checkSpeech("hello world I love cheese", "hel world U love");
  }
}

function drawBackObjects(State) {
  let state = State;
  if (state == 0) {
    noStroke();
    fill(200, 200, 200);
    rect(0, 0, windowWidth, windowHeight);
    fill(190, 0, 0);
    rect(0, 0, windowWidth, windowHeight / 2);
  }
  if (state == 1) {
    noStroke();
    fill(200, 200, 200);
    rect(0, 0, windowWidth, windowHeight);
    fill(190, 0, 0);
    rect(0, 0, windowWidth, 95);
  }

  if (state == 2) {
    noStroke();
    fill(200, 200, 200);
    rect(0, 0, windowWidth, windowHeight);
    fill(190, 0, 0);
    rect(0, 0, windowWidth, windowHeight / 2 - (windowHeight / 2 - 95) / animationTime * (animationHandler + 1));
  }

  if (state == 3) {
    noStroke();
    fill(200, 200, 200);
    rect(0, 0, windowWidth, windowHeight);
    fill(190, 0, 0);
    rect(0, 0, windowWidth, windowHeight);
  }

  if (state == 4) {
    noStroke();
    fill(200, 200, 200);
    rect(0, 0, windowWidth, windowHeight);
    fill(190, 0, 0);
    rect(0, 0, windowWidth, 95 + (windowHeight - 95) / animationTime * (animationHandler + 1));
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawBackObjects(currentState);
}

function draw() {

  if (animationHandler != -1 && currentState == 2) {
    drawBackObjects(currentState);
    animationHandler++;
    if (animationHandler == animationTime) {
      animationHandler = -1;
      currentState = 1;
    }
  }
  if (animationHandler != -1 && currentState == 4) {
    drawBackObjects(currentState);
    animationHandler++;
    if (animationHandler == animationTime) {
      animationHandler = -1;
      currentState = 3;
    }
  }
}