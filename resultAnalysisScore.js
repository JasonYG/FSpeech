// give user percentage of their speech correct
// use ratio of total words, green words compared to red, yelow, orange words

function resultAnalysisScore(speechWordObjectArray, originalWordObjectArray){
  let totalOrigWords = originalWordObjectArray.length; //orignal word count

  console.log(speechWordObjectArray, originalWordObjectArray);

  // get total num of correct words said
  let totalGreenWords = 0;
  let totalYellowWords = 0;
  let totalRedWords = 0;
  for (let i = 0; i < speechWordObjectArray.length; i++){
    if (originalWordObjectArray[i].status == 0){
      totalGreenWords++;
    }
    if (originalWordObjectArray[i].status == 2){
      totalYellowWords++;
    }
    if (originalWordObjectArray[i].status == 1){
      totalRedWords++;
    }
  }
  console.log("Green: " + totalGreenWords, "Yellow: " + totalYellowWords, "Red: " + totalRedWords);

  // calculating score
  // give the user general suggestions
  let accuracyScore = 0; // percentage
  accuracyScore = Math.round((totalGreenWords / totalOrigWords) * 100);
  console.log("Accuracy: " + accuracyScore + "%");

  let weightedScore = 0; //percentage
  let greenWeight = 1.5;
  let yellowWeight = -0.25;
  let redWeight = -0.25;
  weightedScore = ((greenWeight*totalGreenWords) + (redWeight*totalRedWords) + (yellowWeight*totalYellowWords));
  console.log("Weighted Average: " + weightedScore + "%");

  return [totalGreenWords, totalYellowWords, totalRedWords, accuracyScore, weightedScore];

}
