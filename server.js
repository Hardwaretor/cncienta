const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;
const fruits = require('./fruits');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/fruits', (req, res) => {
  res.json(fruits);
});


app.listen(port, () => {
  console.log(`CNCienta.com Public Data Base on port:${port}`);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const router = jsonServer.router('./routes.json')


const server = jsonServer.create()
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))
const iotusersdb = JSON.parse(fs.readFileSync('./iotusers.json', 'UTF-8'))
const machinesdb = JSON.parse(fs.readFileSync('./machines.json', 'UTF-8'))
const devicesdb = JSON.parse(fs.readFileSync('./devices.json', 'UTF-8'))


server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = "./config/config.json"
const expiresIn = '1h'


// Create a token from a payload 
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

// Verify the token 
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

// Check if the user exists in database
function isAuthenticated({ username, password, }) {
  return userdb.users.findIndex(user => user.username === username && user.password === password) !== -1
}

////////////////////////////// New User ////////////////////////////////

server.post('/users/register', (req, res) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);
  const { username, password, } = req.body;

  if (isAuthenticated({ username, password }) === true) {
    const status = 401;
    const message = 'Username and Password already exist';
    res.status(status).json({ status, message });
    return
  }

  const access_token = createToken({ username, password })
  console.log("Access Token:" + access_token);
  res.status(200).json({ access_token })


  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());



    // Get the id of last user
    const user = (req.body);

    var id = data.users.length ? Math.max(...data.users.map(x => x.id)) + 1 : 1;
    data.users.push({
      id: id,
      ...user

    });

    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {  // WRITE

      if (err) {
        const status = 401
        const message = err
        res.status(status).json({ status, message })
        return

      }

    });
  });

})

////////////////////////////// New IOT User ////////////////////////////////

server.post('/iotusers/register', (req, res) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);
  const { iotusername, iotpassword, } = req.body;

  if (isAuthenticated({ iotusername, iotpassword }) === true) {
    const status = 401;
    const message = 'Username and Password already exist';
    res.status(status).json({ status, message });
    return
  }

  const access_token = createToken({ iotusername, iotpassword })
  console.log("Access Token:" + access_token);
  res.status(200).json({ access_token })


  fs.readFile("./iotusers.json", (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());



    // Get the id of last user
    const user = (req.body);

    var id = data.users.length ? Math.max(...data.users.map(x => x.id)) + 0 : 1;
    data.users.push({
      id: id,
      ...user

    });

    const iotuser = (req.body);

    var id = data.iotusers.length ? Math.max(...data.iotusers.map(x => x.id)) + 1 : 1;
    data.users.push({
      id: id,
      ...iotuser

    });

    var writeData = fs.writeFile("./iotusers.json", JSON.stringify(data), (err, result) => {  // WRITE

      if (err) {
        const status = 401
        const message = err
        res.status(status).json({ status, message })
        return

      }

    });
  });

})


////////////////////////////// New Machine ////////////////////////////////

server.post('/machines/register', (req, res) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);

  fs.readFile("./machines.json", (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());



    // Get the id of last user
    const user = (req.body);

    var id = data.users.length ? Math.max(...data.users.map(x => x.id)) + 0 : 1;
    data.users.push({
      id: id,
      ...user

    });

    const machine = (req.body);

    var id = data.machine.length ? Math.max(...data.machine.map(x => x.id)) + 1 : 1;
    data.machine.push({
      id: id,
      ...machine

    });

    var writeData = fs.writeFile("./machine.json", JSON.stringify(data), (err, result) => {  // WRITE

      if (err) {
        const status = 401
        const message = err
        res.status(status).json({ status, message })
        return

      }

    });
  });

})

////////////////////////////// New Device ////////////////////////////////

server.post('/devices/register', (req, res) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);

  fs.readFile("./devices.json", (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({ status, message })
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());



    // Get the id of last user
    const user = (req.body);

    var id = data.users.length ? Math.max(...data.users.map(x => x.id)) + 0 : 1;
    data.users.push({
      id: id,
      ...user

    });

    const device = (req.body);

    var id = data.device.length ? Math.max(...data.device.map(x => x.id)) + 1 : 1;
    data.device.push({
      id: id,
      ...device

    });

    var writeData = fs.writeFile("./device.json", JSON.stringify(data), (err, result) => {  // WRITE

      if (err) {
        const status = 401
        const message = err
        res.status(status).json({ status, message })
        return

      }

    });
  });

})


////////////////////////// Authenticate ///////////////////////////

server.post('/users/authenticate', (req, res) => {
  console.log("login endpoint called; request body:");

  console.log(req.body);
  const { username, password, } = req.body;
  const access_token = createToken({ username, password, })
  console.log("Access Token:" + access_token);

  const user = userdb.users.find(u => u.username === username && u.password === password);
  const iotusers = iotusersdb.iotusers.filter(x => x.user_id === user.id );
  const machines = machinesdb.machines.filter(x => x.user_id === user.id );
  const devices = devicesdb.devices.filter(x => x.user_id === user.id);


  if (isAuthenticated({ username, password }) === false) {
    const status = 401
    const message = 'Incorrect user name or password'
    res.status(status).json({ status, message })
    return

  }

  if (isAuthenticated({ username, password }) === true) {
    const { password, ...userWithoutPassword } = user;
    res.status(200).json({...userWithoutPassword })
  }

})

////////////////////////// IOT Authenticate ///////////////////////////

////////////////////////// IOT Machine list ///////////////////////////

////////////////////////////// New Device ////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////


server.use(router)

server.listen(4001, () => {
  console.log('CNCienta.com Private Data Base on port:4001')
})