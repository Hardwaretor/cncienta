const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
var config = require('./config/config.json');
const app = express();
const { Boards, Led } = require("johnny-five");

const SerialPort = require('serialport');
// Promise approach
SerialPort.list().then(ports => {
  ports.forEach(function(port) {
    console.log(port.path);
    console.log(port.pnpId);
    console.log(port.manufacturer);
  });
});

var five = require('johnny-five');
var board = five.Board();

board.on('ready', function () {

var pubnub = require('pubnub').init({
publish_key: 'YOUR_PUBLISH_KEY',
        subscribe_key: 'YOUR_SUBSCRIBE_KEY'
        
});



function setLedColor(receivedObj) {
console.log("receivedObj :", receivedObj);
if (receivedObj.led_status === 1) {
console.log("ON");
led8.on();
}
if (receivedObj.led_status === 0) {
console.log("OFF");
led8.off();
}
}

const boards = new Boards(["A", "B"]);

// Create 2 board instances with IDs "A" & "B"
boards.on("ready", () => {

  // Both "A" and "B" are initialized
  // (connected and available for communication)

  // Access them by their ID:
  const led = new Led({
    board: boards.byId("A"),
    pin: 13,
  });

  led.blink();

  // |this| is an array-like object containing references
  // to each initialized board.
  boards.each(board => {
    if (board.id === "B") {
      // Initialize an Led instance on pin 13 of
      // each initialized board and strobe it.
      const led = new Led({
        pin: 13,
        board
      });

      led.blink();
    }
  });
});

function initLedColor() {
   led8 = new five.Led(8);
   led8.off();
   console.log("Arduino server is running now.");
   console.log("Initilization, first call function");
  }

  



});

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
const port = 4002;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`CNCienta.com Machine Controller on port:${port}`));

//////////////////////////////////////////////////////////////////////////////////////////////


