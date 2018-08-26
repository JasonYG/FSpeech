//
// //font setup
// var font,
//   fontsize = 40
//
// function preload() {
//   // Ensure the .ttf or .otf font stored in the assets directory
//   // is loaded before setup() and draw() are called
//   font = loadFont('assets/Roboto-Light.ttf');
// }
//
// function setup() {
//   createCanvas(1280, 720);
//
//   // Set text characteristics
//   textFont(font);
//   textSize(fontsize);
//   textAlign(CENTER, CENTER);
// }
//
// function draw() {
//   background(160);
//
//   // Align the text to the right
//   // and run drawWords() in the left third of the canvas
//   textAlign(CENTER);
//   drawSentence( width * .25);
// }
//
// function drawSentence(x) {
//   // get the sentence user input
//   var sentenceGiven = sentenceInput();
//
//   // The text() function needs three parameters:
//   // the text to draw, the horizontal position,
//   // and the vertical position
//   fill(0);
//   text(sentenceGiven, x, 500);
// }
