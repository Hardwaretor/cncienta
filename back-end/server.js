const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
const products = require('./db/products.json');
const machines = require('./db/machines.json');
const devices = require('./db/devices.json');
const cams = require('./db/cams.json');

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

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/devices', (req, res) => {
  res.json(devices);
});

app.get('/cams', (req, res) => {
  res.json(cams);
});

app.get('/machines', (req, res) => {
  res.json(machines);
});


app.listen(port, () => {
  console.log(`CNCienta.com Public Data Base on port:${port}`);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const userdb = JSON.parse(fs.readFileSync('./back-end/db/users.json', 'UTF-8'))
const machinesdb = JSON.parse(fs.readFileSync('./back-end/db/machines.json', 'UTF-8'))
const devicesdb = JSON.parse(fs.readFileSync('./back-end/db/devices.json', 'UTF-8'))
const camsdb = JSON.parse(fs.readFileSync('./back-end/db/cams.json', 'UTF-8'))
const productsdb = JSON.parse(fs.readFileSync('./back-end/db/products.json', 'UTF-8'))


server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = "./back-end/config/config.json"
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

////////////////////////// Authenticate ///////////////////////////

server.post('/users/authenticate', (req, res) => {
  console.log("login endpoint called; request body:");

  console.log(req.body);
  const { username, password, } = req.body;
  const access_token = createToken({ username, password, })
  console.log("Access Token:" + access_token);

  const user = userdb.users.find(u => u.username === username && u.password === password);
  const machines = machinesdb.machines.filter(x => x.user_id === user.id );
  const devices = devicesdb.devices.filter(x => x.user_id === user.id);
  const cams = camsdb.cams.filter(x => x.user_id === user.id);
  const products = productsdb.products.filter(x => x.user_id === user.id);


  if (isAuthenticated({ username, password }) === false) {
    const status = 401
    const message = 'Incorrect user name or password'
    res.status(status).json({ status, message })
    return

  }

  if (isAuthenticated({ username, password }) === true) {
    const { password, ...userWithoutPassword } = user;
    res.status(200).json({access_token,machines,cams,products,devices, ...userWithoutPassword })
  }

})


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


  fs.readFile("./back-end/db/users.json", (err, data) => {
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

    var writeData = fs.writeFile("./back-end/db/users.json", JSON.stringify(data), (err, result) => {  // WRITE

      if (err) {
        const status = 401
        const message = err
        res.status(status).json({ status, message })
        return

      }

    });
  });

})


server.listen(4001, () => {
  console.log('CNCienta.com Private Data Base on port:4001')
})