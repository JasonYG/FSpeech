let socket = io.connect('http://localhost:8080');
let input = "";
let voiceRecording = false;

socket.on('recorded',
  // When we receive data
  function(data) {
    input += data;
    console.log(data);
  }
);

function speechToText(handler) {
  if (handler == "START") {
    console.log("Started Recording");
    socket.emit('record', true);
  } else if (handler == "STOP") {
    console.log("Stopped Recording");
    socket.emit('record', false);
  }
}
