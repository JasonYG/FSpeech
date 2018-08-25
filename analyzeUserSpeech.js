function checkSpeech(speechString, originalText){
  parentDiv = createDiv();
  let originalWordObjectArray = [];
  let redundentWords = [];

  let speechArray = speechString.split(" ");
  let originalArray = originalText.split(" ");

  for (let i = 0; i < originalArray.length; i++) {
    let newWordObject = new CreateNewWord(originalArray[i]);
    originalWordObjectArray.push(newWordObject);
    //console.log(originalWordObjectArray[i].word)
    originalWordObjectArray[i].word.parent(parentDiv); //adds div attributes to the parentDiv
  }

  //sentences are same length
  if (speechArray.length == originalArray.length) {
    for (let i = 0; i < speechArray.length; i++) {
        originalWordObjectArray[i].userCorrect = speechArray[j] == originalArray[i] ? true:false;
    }
  }

  //speechString is a longer sentences
  if (speechArray.length > originalArray.length) {
    let j = 0;
    for (let i = 0; i < originalArray.length; i++) {
      if (j >= speechArray.length) break;
      if (speechArray[j] == originalArray[i]){
       originalWordObjectArray[i].userCorrect = true;
     } else {
       while (originalArray.slice(i, originalArray.length).indexOf(speechArray[j]) == -1) {
        console.log(speechArray[j], i);
         redundentWords.push(speechArray[j]);
         j++;
         if (j > speechArray.length) {
           break;
         }
       } console.log(speechArray[j], originalArray[i]);
       originalWordObjectArray[i].userCorrect = speechArray[j] == originalArray[i] ? true:false;
     }
      j++;
    }
  }
  for (let i = 0; i < originalWordObjectArray.length; i++) {
    console.log(originalWordObjectArray[i].userCorrect);
  }
}




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
