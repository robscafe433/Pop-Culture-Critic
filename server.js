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
  secret: "Super secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
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
