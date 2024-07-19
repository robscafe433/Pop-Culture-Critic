// Importing Express
const express = require('express');
const handlebars = require('express-handlebars');

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
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require('./controllers/homeController')(app);
// require('./controllers/index')(app);

// adding routes to server.js  ***********************rs
var authRouter = require('./routes/authorization');

app.use('/', authRouter); //************************rs

app.listen(PORT, () => console.log(`Express server listening on port 5501`));
