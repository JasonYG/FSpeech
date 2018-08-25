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

  drawSentence();
}

function drawSentence() {
  // turning the user's input into an array
  let testSentence = sentenceInput();
  let testSentenceArr = testSentence.split(" ");

  // array to store CreateNewWord objects
  let allWordsArray = [];

  parentDiv = createDiv(); //parent container holding divs from CreateNewWord objects

  // creates div objects inside word objects and pushes it into 1 array
  for (let i = 0; i < testSentenceArr.length; i++){
    let newWord = new CreateNewWord(testSentenceArr[i]);
    allWordsArray.push(newWord);
    allWordsArray[i].word.parent(parentDiv); //adds div attributes to the parentDiv
  }

  // manipulating the div container
  parentDiv.position(50, 50);
}

function draw() {
  background(160);
}

// class for individual words as objects
function CreateNewWord(word) {
  //create a new word which will go into a list of words
  this.word = createDiv(word);
  this.color = "white";
  this.x_pos = 0;
  this.y_pos = 0;
  this.userCorrect = null; //boolean for the user reading the word

  //changing the Color
  this.changeColor = function(userCorrect){
    console.log("Color changing!");
    if (userCorrect){
      //color to green
    }
    else{
      //color to red
    }
  }
}
