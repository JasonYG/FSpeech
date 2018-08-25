// Keep track of our socket connection
let socket;
let recordingButton;
let recordedText = '';

function setup() {
  noCanvas();
  recordingButton = createButton("Start Recording");
  recordingButton.mouseReleased(speechToText);
  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://localhost:8080');
  // We make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('recorded',
    // When we receive data
    function(data) {
      recordedText = data;
      console.log(data);
    }
  );
}

function draw() {
  // Nothing
}

// Function for sending to the socket
function speechToText() {
  // We are sending!
  console.log("Recording!");

  // Send that object to the socket
  socket.emit('record');
}

//
// // require('dotenv').config({path: 'environmental.env'});
//
// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8080, function(){
//     console.log('Server running on 8080...');
// });
//
//
//   console.log("ye");
//   const record = require('node-record-lpcm16');
//
//   // Imports the Google Cloud client library
//   const speech = require('@google-cloud/speech');
//
//   // Creates a client
//   const client = new speech.SpeechClient();
//
//   /**
//    * TODO(developer): Uncomment the following lines before running the sample.
//    */
//   const encoding = 'LINEAR16';
//   const sampleRateHertz = 16000;
//   const languageCode = 'en-US';
//
//   const request = {
//     config: {
//       encoding: encoding,
//       sampleRateHertz: sampleRateHertz,
//       languageCode: languageCode,
//     },
//     interimResults: false, // If you want interim results, set this to true
//   };
//
//   // Create a recognize stream
//   const recognizeStream = client
//     .streamingRecognize(request)
//     .on('error', console.error)
//     .on('data', data => {
//       process.stdout.write(
//         data.results[0] && data.results[0].alternatives[0]
//           ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
//           : `\n\nReached transcription time limit, press Ctrl+C\n`
//       );
//       // createP(data.results[0].alternatives[0].transcript);
//     }
//     );
//
//   // Start recording and send the microphone input to the Speech API
//
//   record
//     .start({
//       sampleRateHertz: sampleRateHertz,
//       threshold: 0,
//       // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
//       verbose: false,
//       recordProgram: 'rec', // Try also "arecord" or "sox"
//       silence: '10.0',
//     })
//     .on('error', console.error)
//     .pipe(recognizeStream);
//
//   console.log('Listening, press Ctrl+C to stop.');
