let originalTextIterator = 0;
let inputTextIterator = 0;

let allOriginalTextObjects = [];

function checkSpeech(originalText, input) {
  const LOOK_FORWARD = 5;
  //checks if the input array has been resized to one
  if (inputTextIterator >= input.length) {
    inputTextIterator = 0;
  }

  let originalContainer = createDiv();
  originalContainer.parent("content");
  originalContainer.class("container");

  let speechContainer = createDiv();
  speechContainer.parent("content");
  speechContainer.class("container")

  let allOriginalTextWords = originalText.split(" ");

  let allInputTextWords = input.split(" ");
  if (allOriginalTextObjects === undefined || allOriginalTextObjects.length == 0) {

    for (let i = 0; i < allOriginalTextWords.length; i++) {
      let newWordObject = new CreateNewWord(allOriginalTextWords[i], originalContainer);
      allOriginalTextObjects.push(newWordObject);
      allOriginalTextObjects[i].word.parent(originalContainer);
    }
  }

  originalWordObject = allOriginalTextObjects[originalTextIterator];

  //console.log(originalWordObject.wordText, allInputTextWords[inputTextIterator]);
  //console.log(originalWordObject.wordText);
  console.log(inputTextIterator, originalTextIterator);
  console.log(allInputTextWords.length);
  //means that the top and bottom match
  if (originalWordObject.wordText == allInputTextWords[inputTextIterator]) {
    originalWordObject.changeStatus(0);
    originalTextIterator++;
    inputTextIterator++;
    return;
  } else {
    //test case for WRONG word
    if (inputTextIterator == 0 || originalTextIterator == 0) {
      if (allInputTextWords[inputTextIterator + 1] == allOriginalTextWords[originalTextIterator + 1]) {
        allOriginalTextObjects[originalTextIterator].changeStatus(1);
        originalTextIterator++;
        inputTextIterator++;
        return;
      }
    } else if (inputTextIterator == allInputTextWords.length - 1 || originalTextIterator == allOriginalTextObjects.length - 1) {
      if (allInputTextWords[inputTextIterator - 1] == allOriginalTextWords[originalTextIterator - 1]) {
        allOriginalTextObjects[originalTextIterator].changeStatus(1);
        // originalTextIterator++;
        // inputTextIterator++;
        return;
      }

    } else {
      if (allInputTextWords[inputTextIterator - 1] == allOriginalTextWords[originalTextIterator - 1]) {
        if (allInputTextWords[inputTextIterator + 1] == allOriginalTextWords[originalTextIterator + 1]) {
          allOriginalTextObjects[originalTextIterator].changeStatus(1);
          originalTextIterator++;
          inputTextIterator++;
          return;
        }
      }
    }

    //test case for SKIPPED word
    //If the word is in the next couple ones, it means that we SKIPPED
    if (allOriginalTextWords.slice(originalTextIterator, originalTextIterator + LOOK_FORWARD).indexOf(allInputTextWords[inputTextIterator]) != -1) {
      //everything in between is skipped
      for (let i = originalTextIterator; i < originalTextIterator + allOriginalTextWords.slice(originalTextIterator, originalTextIterator + LOOK_FORWARD).indexOf(allInputTextWords[inputTextIterator]); i++) {
        if (i >= allOriginalTextObjects.length) {
          break;
        }
        allOriginalTextObjects[i].changeStatus(3); //skipped word
      }
      originalTextIterator += allOriginalTextWords.slice(originalTextIterator, originalTextIterator + LOOK_FORWARD).indexOf(allInputTextWords[inputTextIterator]);
      //inputTextIterator++;
    } else {
      //test case for ADDED word
      while (allOriginalTextWords.slice(originalTextIterator, originalTextIterator + LOOK_FORWARD).indexOf(allInputTextWords[inputTextIterator]) == -1) {
        inputTextIterator++;
        if (allOriginalTextWords.slice(originalTextIterator, originalTextIterator + LOOK_FORWARD).indexOf(allInputTextWords[inputTextIterator]) != -1) {
          inputTextIterator += allOriginalTextWords.slice(originalTextIterator, originalTextIterator + LOOK_FORWARD).indexOf(allInputTextWords[inputTextIterator]);
          break;
        }
      }

    }

  }

  //console.log(allInputTextWords[inputTextIterator]);
}

// let originalContainer = createDiv();
// originalContainer.parent("content");
// originalContainer.class("container");
//
// let speechContainer = createDiv();
// speechContainer.parent("content");
// speechContainer.class("container")
//
//
//
// let originalWordObjectArray = [];
// let speechWordObjectArray = [];
// let redundentWords = [];
//
// let speechArray = speechString.split(" ");
// let originalArray = originalText.split(" ");
//
// for (let i = 0; i < originalArray.length; i++) {
//   let newWordObject = new CreateNewWord(originalArray[i], originalContainer);
//   originalWordObjectArray.push(newWordObject);
//   //console.log(originalWordObjectArray[i].word)
//   originalWordObjectArray[i].word.parent(originalContainer); //adds div attributes to the parentDiv
// }
//
// for (let i = 0; i < speechArray.length; i++) {
//   let newWordObject = new CreateNewWord(speechArray[i], speechContainer);
//   speechWordObjectArray.push(newWordObject);
//   //console.log(originalWordObjectArray[i].word)
//   speechWordObjectArray[i].word.parent(speechContainer); //adds div attributes to the parentDiv
// }
//
// //sentences are same length
// if (speechArray.length == originalArray.length) {
//   for (let i = 0; i < speechArray.length; i++) {
//     speechWordObjectArray[j].changeStatus(speechArray[j] == originalArray[i] ? 0 : 1);
//   }
// }
//
// //speechString is a longer sentences
// //if (speechArray.length > originalArray.length) {
// let j = 0;
// for (let i = 0; i < originalArray.length; i++) {
//   if (j >= speechArray.length) break;
//   if (speechArray[j] == originalArray[i]) {
//     originalWordObjectArray[i].changeStatus(0);
//     speechWordObjectArray[j].changeStatus(0);
//   } else {
//     while (originalArray.slice(i, originalArray.length).indexOf(speechArray[j]) == -1) {
//       //console.log(speechArray[j], i);
//       //redundentWords.push(speechArray[j]);
//       speechWordObjectArray[j].changeStatus(2);
//
//       j++;
//       if (j > speechArray.length) {
//         break;
//       }
//     }
//     //console.log(speechArray[j], originalArray[i]);
//     originalWordObjectArray[i].changeStatus(speechArray[j] == originalArray[i] ? 0 : 1);
//     speechWordObjectArray[j].changeStatus(speechArray[j] == originalArray[i] ? 0 : 1);
//   }
//   j++;
// }
// //}
// for (let i = 0; i < originalWordObjectArray.length; i++) {
//   console.log(speechWordObjectArray[i]);
// }
// for (let k = 0; k < originalWordObjectArray.length; k++) {
//   if (originalWordObjectArray[k].status == null) {
//     originalWordObjectArray[k].changeStatus(3);
//   }
// }
//}




// let example1 = "I want to be able to say this.";
// let example2 = "I went to be able to to say this.";
//
// //testing
//
// function checkSpeech(userSpeechString, userOriginalText, allWordsArray[]) {
//   // check the user's original text with what they said
//   let userSpeechStringArr = userSpeechString.split(" ");
//   let userOriginalTextArr = userOriginalText.split(" ");
//   console.log(allWordsArray);
//
//   // speech string has exact same value
//   if (userSpeechString == userOriginalText){
//     console.log("Perfect speaking!");
//   }
//
//   // the dude messed up
//   else {
//     // the same number of words were said
//     if (userSpeechStringArr.length == userOriginalTextArr.length){
//       let indexNum = 0;
//       // compare index by index
//       for (int i = indexNum; i < userSpeechStringArr.length; i++){
//         if (userSpeechStringArr[indexNum] == userOriginalTextArr[indexNum]){
//           indexNum++;
//           allWordsArray[indexNum].userCorrect = true; // confirm correct word
//         }
//         else{
//           //  mismatch at [indexNum]
//           allWordsArray[indexNum].userCorrect = false;
//           indexNum++;
//         }
//       }
//     }
//     // a different num of words were said
//     else{
//
//     }
//   }
// }
//
// function checker (userSpeechStringArr, userOriginalTextArr, indexNum, origWord, speechWord){
//
// }