// author: Raymond
// date: 25/08/2018

// font setup
var font,
  fontsize = 40

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/Roboto-Light.ttf');
}

function setup() {
  canvas = createCanvas(720, 480);
  canvas.position(250);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  // turning the user's input into an array
  let testSentence = sentenceInput();
  let testSentenceArr = testSentence.split(" ");

  // array to store word objects
  let allWordsArray = [];

  for (let i = 0; i < testSentenceArr.length; i++){
    let newWord = new CreateNewWord(testSentenceArr[i]);
    allWordsArray.push(newWord);
  }

  

}

function draw() {
  background(160);
  //
  // let testSentence = sentenceInput();
  // let testSentenceArr = testSentence.split(" ");
  //
  // let allWordsArray = [];
  //
  // //create array of words aka a sentence
  // for (let i = 0; i < testSentenceArr.length; i++){
  //   let newWord = new CreateNewWord(testSentenceArr[i]);
  //   allWordsArray.push(newWord);
  // }
  //
  // // rendering each word in a loop
  // // spacing is wack
  // let counter = 0;
  // for (let j = 0; j < allWordsArray.length; j++){
  //   counter += 50;
  //   allWordsArray[j].drawWord(100 + counter, 100);
  // }
}

// word class
function CreateNewWord(word) {
  //create a new word which will go into a list of words
  this.word = createDiv(word);
  this.color = (255, 255, 255);
  this.x_pos = 0;
  this.y_pos = 0;

  // draw the word (loop this)
  this.drawWord = function(x, y) {
    fill(this.color);
    text(word, x, y);
  }
}
