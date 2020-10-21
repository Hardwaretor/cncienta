const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
var config = require('./config/config.json');
const app = express();
const { Boards, Led } = require("johnny-five");

var socket = {};
var serialports = [];
var listenSerialport = null;

app.use(express.static('./machine.html'));
app.use(require('cookie-parser')());
app.use(require('cookie-session')({
	secret: config.secret
	
}));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var sp = require('serialport');

var router = express.Router();

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



});




app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
const port = 4002;
app.set('port', port);
const server = http.createServer(app);

server.listen(port, function () {
	var host = server.address().address;
  var port = server.address().port;
  () => console.log(`CNCienta.com Machine Controller on port:${host,port}`)});

//////////////////////////////////////////////////////////////////////////////////////////////


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