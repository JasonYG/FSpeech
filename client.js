let socket = io.connect('http://localhost:8080');

socket.on('recorded',
  // When we receive data
  function(data) {
    recordedText = data;
    console.log(data);
  }
);

function speechToText() {
  console.log("Recording!");
  socket.emit('record');
}
