const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine
const hbs = exphbs.create();

const sess = {
  secret: process.env.SECRET,
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at PORT: ${PORT}`));
});

//-----------------

// *** *** ***
// May need to include this boiler plate for handlebars??? MVC day-1 video time: 23:10-rs

// handlebars has built in helper methods like loop/map that can be written in the handlebars page:
//                           <!-- We implement the built-in helper, #each. This helper will iterate over dishes -->
//                             {{#each dishes as |dish|}}

// ? Set Handlebars as the default template engine. * Maybe included somewhere else???
//app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

//------------------

// // Importing Express
// const express = require("express");

// // Importing Express.js from PORT 5500
// const PORT = 5501;

// // importing node.js packages
// const path = require("path");

// const app = express();
// //f for static files from public folder
// app.use(express.static("public"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// require("./controllers/homeRoutes")(app);
// require("./controllers/index")(app);

// app.listen(PORT, () => console.log(`Express server listening on port 5501`));
