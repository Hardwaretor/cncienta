const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
var config = require('./config/config.json');
const app = express();

var socket = {};
var serialports = [];
var listenSerialport = null;

app.use(express.static('../dist'));

app.use(require('cookie-parser')());
app.use(require('cookie-session')({
	secret: config.secret
	
}));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var sp = require('serialport');


var router = express.Router();

router.post('/api/serialport',function(req,res){

	if(listenSerialport == null) {
		var nameOfPort = req.body.name;
		serialports.forEach((item)=> {
			if(item === nameOfPort){
				listenSerialport = new sp.SerialPort(nameOfPort,{baudRate:19200,parser: sp.parsers.readline('\n')});
				listenSerialport.on('open', function () {
					console.log("OPEN port" + nameOfPort);

				});

				listenSerialport.on('data', function (data) {
					try{
						var  serialData = JSON.parse("" +data);
						socket.emit('data',serialData);

					} catch (SyntaxError){
						console.log("Error");
					}

                });
                
                
			}
		});
		res.send({status:"OK"});
	} else if(!res.finished)
		res.send({status:"ERROR"});


});

sp.list(function(err, ports) {
	ports.forEach((item)=>{
		serialports.push(item.comName);
	});
	console.log(serialports);
});

sp.list().then(ports => {
	ports.forEach((item)=>{
		serialports.push(item.comName);
	});
	console.log(serialports);
});

app.use(router);

sp.list(function(err, ports) {
	ports.forEach((item)=>{
		serialports.push(item.comName);
	});
	console.log(serialports);
});


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
    res.sendFile(path.join(__dirname, '../dist/cncienta/index.html'));
});
const port = 4002;
app.set('port', port);
const server = http.createServer(app);

var io = require('socket.io')(server);

//io.set('transports', [
//	'websocket'
//	, 'flashsocket'
//	, 'htmlfile'
//	, 'xhr-polling'
//	, 'jsonp-polling'
//]);

io.on('connection', function (sock) {
	socket = sock;
	socket.emit('serialports',serialports);
	console.log('connection');
});

server.listen(port, function () {
	var host = server.address().address;
  var port = server.address().port;
  () => console.log(`CNCienta.com Machine Controller on port:${host,port}`)});

//////////////////////////////////////////////////////////////////////////////////////////////





