// Importing Express
const express = require("express");

// Importing Express.js from PORT 5500
const PORT = 5501;

// importing node.js packages
const path = require("path");

const app = express();
//f for static files from public folder
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/homeRoutes")(app);
require("./routes/index")(app);

app.listen(PORT, () => console.log(`Express server listening on port 5501`));
