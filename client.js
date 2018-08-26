let socket = io.connect('http://localhost:8080');
let input = "";
let voiceRecording = false;

socket.on('recorded',
  // When we receive data
  function(data) {
    input = data;
    console.log(data);
  }
);

function startSpeechRecognition() {
  console.log("Started Recording");
  socket.emit('record');
}

function stopSpeechRecognition() {
  console.log("Started Recording");
  socket.emit('stopRecord');
}