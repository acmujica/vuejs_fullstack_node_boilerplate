const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const config = require('../config');

// Allow Cors from expected origin

const ORIGIN = config.origin;

// If Preflight is required app.options sends the CORS headers ahead of time.
app.options('*', function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', ORIGIN);
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
})

app.use('*', function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', ORIGIN);
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');
    
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);
    
    // Pass to next layer of middleware
    next();
});

// Tell express application middlewares to use
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set up static folder

app.use('/media', express.static('public'));

// Routes
const indexRouter = require('./routes/index');
const parentExampleRouter = require ('./routes/parentExample');

// Add routers to app
app.use('/', indexRouter);
app.use('/parentExample', parentExampleRouter);

module.exports = app;