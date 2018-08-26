let example1 = "I want to be able to say this.";
let example2 = "I went to be able to to say this.";

function checkSpeech(userSpeechString, userOriginalText, allWordsArray[]) {
  // check the user's original text with what they said
  let userSpeechStringArr = userSpeechString.split(" ");
  let userOriginalTextArr = userOriginalText.split(" ");

  // speech string has exact same value
  if (userSpeechString == userOriginalText) {
    console.log("Perfect speaking!");
  }

  // the dude messed up
  else {
    // the same number of words were said
    if (userSpeechStringArr.length == userOriginalTextArr.length) {
      let indexNum = 0;
      // compare index by index
      for (int i = indexNum; i < userSpeechStringArr.length; i++) {
        if (userSpeechStringArr[indexNum] == userOriginalTextArr[indexNum]) {
          indexNum++;
          allWordsArray[indexNum].userCorrect = true; // confirm correct word
        } else {
          //  mismatch at [indexNum]
          allWordsArray[indexNum].userCorrect = false;
          indexNum++;
        }
      }
    }
    // a different num of words were said
    else {

    }
  }
}

function checker(userSpeechStringArr, userOriginalTextArr, indexNum, origWord, speechWord) {

}