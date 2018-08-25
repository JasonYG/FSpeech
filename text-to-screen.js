function drawSentence() {
  // turning the user's input into an array
  let testSentence = sentenceInput();
  let testSentenceArr = testSentence.split(" ");

  // array to store CreateNewWord objects
  let allWordsArray = [];

  parentDiv = createDiv(); //parent container holding divs from CreateNewWord objects

  // creates div objects inside word objects and pushes it into 1 array
  for (let i = 0; i < testSentenceArr.length; i++) {
    let newWord = new CreateNewWord(testSentenceArr[i]);
    allWordsArray.push(newWord);
    allWordsArray[i].word.parent(parentDiv); //adds div attributes to the parentDiv
  }

  // manipulating the div container
  parentDiv.position(50, 50);
}

// class for individual words as objects
function Word(word) {
  //create a new word which will go into a list of words
  this.word = createDiv(word);
  this.color = "white";
  this.x_pos = 0;
  this.y_pos = 0;
  this.userCorrect = null; //boolean for the user reading the word

  //changing the Color
  this.changeColor = function(userCorrect) {
    console.log("Color changing!");
    if (userCorrect) {
      //color to green
    } else {
      //color to red
    }
  }
}