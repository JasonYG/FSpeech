// author: Raymond
// date: 25/08/2018

// font setup
var font, fontsize = 40

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  //font = loadFont('assets/Roboto-Light.ttf');
}

// function setup() {
//   canvas = createCanvas(720, 480);
//   canvas.position(250);
//
//   // Set text characteristics
//   textFont(font);
//   textSize(fontsize);
//   textAlign(CENTER, CENTER);
//
//   drawSentence();
// }

// class for individual words as objects
function CreateNewWord(word, Parent) {
  //create a new word which will go into a list of words
  this.word = createDiv();
  this.word.parent(Parent);
  this.word.class("word");

  let wordTextObj = createElement("p", word);
  wordTextObj.parent(this.word);

  let wordTextTooltip = createElement("span", "this is a tooltip.");
  wordTextTooltip.parent(wordTextObj);

  this.wordText = word;
  this.color = "white";
  this.status = null; //0 - correct

  //changing the Color
  this.changeStatus = function(Status) {
    this.status = Status;
    //console.log("Color changing!");
    if (Status == 0) {
      this.word.style("color", "white");
      wordTextTooltip.html("Correct reading");
    } else if (Status == 1) {
      this.word.style("color", "red");
      wordTextTooltip.html("Wrong reading or misplaced word");
    } else if (Status == 2) {
      this.word.style("color", "yellow");
      wordTextTooltip.html("Added word");
      //redundant
    } else if (Status == 3) {
      this.word.style("color", "yellow");
      wordTextTooltip.html("Unsaid word");
      //redundant
    }
  }
}
