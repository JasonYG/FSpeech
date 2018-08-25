var http = require('http');
var path = require('path');
var fs = require('fs');

function handleRequest(req, res) {
  // What did we request?
  var pathname = req.url;

  // If blank let's ask for index.html
  if (pathname == '/') {
    pathname = '/index.html';
  }

  // Ok what's our file extension
  var ext = path.extname(pathname);

  // Map extension to file type
  var typeExt = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css'
  };

  // What is it?  Default to plain text
  var contentType = typeExt[ext] || 'text/plain';

  // Now read and write back the file with the appropriate content type
  fs.readFile(__dirname + pathname,
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' + pathname);
      }
      // Dynamically setting content type
      res.writeHead(200,{ 'Content-Type': contentType });
      res.end(data);
    }
  );
}

var server = http.createServer(handleRequest);
server.listen(8080);

var io = require('socket.io').listen(server);

io.sockets.on('connection',
  function (socket) {
    console.log("We have a new client: " + socket.id);
  }
);

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
//
// // Set up HTTP server
// let http = require('http');
// let url = require('url');
// let path = require('path');
// let fs = require('fs');
//
// let server = http.createServer(handleRequest);
// server.listen(8080);
//
// console.log('Server started on port 8080');
//
// function handleRequest(req, res) {
//   // What did we request?
//   let pathname = req.url;
//
//   // If blank let's ask for index.html
//   if (pathname == '/') {
//     pathname = '/index.html';
//   }
//
//   // Ok what's our file extension
//   let ext = path.extname(pathname);
//
//   // Map extension to file type
//   let typeExt = {
//     '.html': 'text/html',
//     '.js':   'text/javascript',
//     '.css':  'text/css'
//   };
//
//   // What is it?  Default to plain text
//   let contentType = typeExt[ext] || 'text/plain';
//
//   // User file system module
//   fs.readFile(__dirname + pathname,
//     // Callback function for reading
//     function (err, data) {
//       // if there is an error
//       if (err) {
//         res.writeHead(500);
//         return res.end('Error loading ' + pathname);
//       }
//       // Otherwise, send the data, the contents of the file
//       res.writeHead(200,{ 'Content-Type': contentType });
//       res.end(data);
//     }
//   );
// }
//
// // Set up websocket
// let io = require('socket.io').listen(server);
//
// // Register a callback function to run when we have an individual connection
// // This is run for each individual user that connects
io.sockets.on('connection',
  // We are given a websocket object in our function
  function (socket) {
    console.log("We have a new client: " + socket.id);

    // "record" event handler
    socket.on('record',
      function(recording) {
        // Create a recognize stream for Google Cloud Speech API
        const recognizeStream = client
          .streamingRecognize(request)
          .on('error', console.error)
          .on('data', data => {
              process.stdout.write(`Transcription:${data.results[0].alternatives[0].transcript}\n`);
              io.sockets.emit('recorded', data.results[0].alternatives[0].transcript);
            }
            // process.stdout.write(data.results[0] && data.results[0].alternatives[0] && recording ? `Transcription:${data.results[0].alternatives[0].transcript}\n`: `\n\nReached transcription time limit, press Ctrl+C\n`);
            // io.sockets.emit('recorded', data.results[0].alternatives[0].transcript);
          });

        record
          .start({
            sampleRateHertz: sampleRateHertz,
            threshold: 0,
            verbose: false,
            recordProgram: 'rec',
            silence: '10.0',
          })
          .on('error', console.error)
          .pipe(recognizeStream);
      }
    );

    // "disconnect" event handler
    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }
);
