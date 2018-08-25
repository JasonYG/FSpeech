
//font setup
var font,
  fontsize = 40

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/Roboto-Light.ttf');
}

function setup() {
  createCanvas(1280, 720);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(160);

  // Align the text to the right
  // and run drawWords() in the left third of the canvas
  // textAlign(CENTER);
  // drawSentence( width * .25);

  var testSentence = sentenceInput();


  //create array of words aka a sentence
  //for (i = )

  // testing oop word
  var testWord = new CreateNewWord("Test");
  // testWord.color = (0,255,127);
  testWord.drawWord(100, 100);
}

function CreateNewWord(word) {
  //create a new word which will go into a list of words
  this.word = word;
  this.color = (255, 255, 255);

  // draw the word (loop this)
  this.drawWord = function(x, y) {
    fill(this.color);
    text(word, x, y);
  }
}



// function drawSentence(x) {
//   // get the sentence user input
//   var sentenceGiven = sentenceInput();
//
//   // The text() function needs three parameters:
//   // the text to draw, the horizontal position,
//   // and the vertical position
//   fill(255, 255, 255);
//   text(sentenceGiven, x, 500);
// }
