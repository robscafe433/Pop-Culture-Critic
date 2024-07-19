// Importing Express
const express = require('express');
const handlebars = require('express-handlebars');

////////////-rs
var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
var db = require('./db/authorization');

////////////end-rs

// adding routes to server.js  ***********************rs
var authRouter = require('./routes/authorization');

const helpers = require('./util/helpers');

// Importing Express.js from PORT 5500
const PORT = 5501;

// importing node.js packages
const path = require('path');

const app = express();

const hbs = handlebars.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//f for static files from public folder
app.use(express.static(path.join(__dirname, 'public/'))); //changed this *********-rs
//  previously was missing '/public' // app.use(express.static('public')); -rs

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require('./controllers/homeController')(app);
// require('./controllers/index')(app);

app.use('/', authRouter); //************************rs

app.listen(PORT, () => console.log(`Express server listening on port 5501`));
