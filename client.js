let socket = io.connect('http://localhost:8080');
let voiceRecording = false;
let runAlg;

socket.on('recorded',
  // When we receive data
  function(data) {
    speechInput = data;
    checkSpeech(speechInput);
    // updateSpeechParagraph(data);
    //if (originalTextIterator == allOriginalTextObjects.length) {
      // for (let i = 0; i < allOriginalTextObjects; i++) {
      //   console.log(allOriginalTextObjects[i]);
      // }
    //}
    console.log(data);
  }
);

function startSpeechRecognition() {
  console.log("Started Recording");
  socket.emit('record');

  // runAlg = setInterval(() => {
  //   checkSpeech(speechInput);
  //   console.log("RAN ALGORITHM");
  // }, 2000);
}

function stopSpeechRecognition() {
  console.log("Stopped Recording");
  socket.emit('stopRecord');

  // clearInterval(runAlg);
}
