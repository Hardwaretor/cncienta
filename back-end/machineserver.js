const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
var config = require('./config/config.json');
const app = express();

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

var channel = 'hue-clone'; // same channel name used in client
var led8;
pubnub.subscribe({
channel: channel,
callback: setLedColor,
connect: initLedColor,
error: function (err) { console.log(err); }
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


