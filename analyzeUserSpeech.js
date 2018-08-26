let data_verify;

let originalObjects = [];
let speechObjects = [];
let ogAnalysisObjects = [];

// for (let i = 0; i < "hello world I love cheese".split(" ").length; i++) {
//   checkSpeech("hello world I love cheese", "hel world U love");
//   if (i == "hello world I love cheese".split(" ").length-1) {
//     for (let j = 0; j < allOriginalTextObjects.length; j++) {
//       console.log(allOriginalTextObjects[j]);
//     }
//   }
// }

// function updateSpeechParagraph(data) {
//   // checkSpeech(textInput, "loal man ruins everythin because he could no eat a cow")
// }

function checkSpeech(input) {
  // HAVE originalObjects ARRAY
  let inputWords = input.split(" ");
  for (let i = 0; i < inputWords.length; i++) {
    inputWords[i] = inputWords[i].toLowerCase();
  }
  const LOOK_FORWARD = 5;

  // for (let i = 0; i < originalObjects.length; i++) {
  //   originalObjects[i].status = null;
  // }

  let ogIt = 0;
  let inIt = 0;

  while(ogIt < originalObjects.length && inIt < inputWords.length) {
    // First Rule
    console.log('Og ' + ogIt + ', In ' + inIt);
    console.log('Og Text: ' + originalObjects[ogIt].wordText, "In Text: " + inputWords[inIt]);
    console.log("Input: " + input);
    if (originalObjects[ogIt].wordText == inputWords[inIt]) {
      console.log("rule 1");
      originalObjects[ogIt].changeStatus(0);
      console.log("change status");

      ogIt++;
      inIt++;
      continue;
    } else if (inputWords.length == 1) {
      originalObjects[ogIt].changeStatus(1);
      console.log("change status");

      break;
    }

    // Second Rule
    if (ogIt == 0 || inIt == 0) {
      if (originalObjects[ogIt + 1].wordText == inputWords[inIt + 1]) {
        console.log("rule 2");
        originalObjects[ogIt].changeStatus(1);
        console.log("change status");

        ogIt++;
        inIt++;
        continue;
      }
    } else if (ogIt == originalObjects.length - 1 || inIt == inputWords.length - 1) {
      console.log("rule 2");

      if (originalObjects[ogIt - 1].wordText == inputWords[inIt - 1]) {
        originalObjects[ogIt].changeStatus(1);
        console.log("change status");

        break;
      } else {
        console.log("rule 2");
        if ((originalObjects[ogIt - 1].wordText == inputWords[inIt - 1]) &&
          (originalObjects[ogIt + 1].wordText == inputWords[inIt + 1])) {
          originalObjects[ogIt].changeStatus(1);
          console.log("change status");

          ogIt++;
          inIt++;
          continue;
          }
      }

      // Third Rule
      while(inIt < inputWords.length) {
        console.log("rule 3");
        if (originalObjects.findIndex((word) => word.wordText == inputWords[inIt]) - inIt < LOOK_FORWARD
            && originalObjects.findIndex((word) => word.wordText == inputWords[inIt]) != -1 && originalObjects.findIndex((word) => word.wordText == inputWords[inIt]) >= ogIt) {
          let newIndex = originalObjects.findIndex((word) => word.wordText == inputWords[inIt] == null);
          for(let i = ogIt; i < newIndex; i++) {
            originalObjects[i].changeStatus(3);
            console.log("change status");
          }
          ogIt = newIndex;
          break;
        } else {
          originalObjects[ogIt].changeStatus(1);
          inIt++;
        }
      }
    }
    if (originalObjects[ogIt].wordText != inputWords[inIt]) {
      originalObjects[ogIt].changeStatus(1);
      break;
    }
  }

  // clearInterval(runAlg);
  console.log(originalObjects);
}
