// Set up Google Cloud Speech API
const record = require('node-record-lpcm16');
const speech = require('@google-cloud/speech');

const encoding = 'LINEAR16';
const sampleRateHertz = 16000;
const languageCode = 'en-US';

const client = new speech.SpeechClient();

const request = {
  config: {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
  },
  interimResults: false, // If you want interim results, set this to true
};

// Set up HTTP server
let http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');

let server = http.createServer(handleRequest);
server.listen(8080);

console.log('Server started on port 8080');

function handleRequest(req, res) {
  // What did we request?
  let pathname = req.url;

  // If blank let's ask for index.html
  if (pathname == '/') {
    pathname = '/index.html';
  }

  // Ok what's our file extension
  let ext = path.extname(pathname);

  // Map extension to file type
  let typeExt = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css'
  };

  // What is it?  Default to plain text
  let contentType = typeExt[ext] || 'text/plain';

  // User file system module
  fs.readFile(__dirname + pathname,
    // Callback function for reading
    function (err, data) {
      // if there is an error
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + pathname);
      }
      // Otherwise, send the data, the contents of the file
      res.writeHead(200,{ 'Content-Type': contentType });
      res.end(data);
    }
  );
}


// WebSocket Portion
// WebSockets work with the HTTP server
let io = require('socket.io').listen(server);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function (socket) {

    console.log("We have a new client: " + socket.id);

    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('record',
      function() {
        // Data comes in as whatever was sent, including objects
        console.log("I AM RECORDING THIS TELLS ME IM RECORDING");

        // Create a recognize stream
        const recognizeStream = client
          .streamingRecognize(request)
          .on('error', console.error)
          .on('data', data => {
            process.stdout.write(data.results[0] && data.results[0].alternatives[0] ? `Transcription:${data.results[0].alternatives[0].transcript}\n`: `\n\nReached transcription time limit, press Ctrl+C\n`);
            // socket.broadcast.emit('recorded', data.results[0].alternatives[0].transcript);
            io.sockets.emit('recorded', data.results[0].alternatives[0].transcript);
          });

        // Start recording and send the microphone input to the Speech API

        record
          .start({
            sampleRateHertz: sampleRateHertz,
            threshold: 0,
            // Other options, see https://www.npmjs.com/package/node-record-lpcm16#options
            verbose: false,
            recordProgram: 'rec', // Try also "arecord" or "sox"
            silence: '10.0',
          })
          .on('error', console.error)
          .pipe(recognizeStream);

        console.log('Listening, press Ctrl+C to stop.');
        // Send it to all other clients

        // This is a way to send to everyone including sender
        // io.sockets.emit('message', "this goes to everyone");

      }
    );

    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }
);
