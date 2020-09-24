const express = require("express");
const expHandlebars = require("express-handlebars");
const path = require("path");
const routes = require("./routes/handlers");
const favoriteTeam = require("./helpers/favoriteTeam");
const list = require("./helpers/list");
const knockoutjs = require("./helpers/knockoutjs");

const PORT = process.env.PORT || 7171;

const app = express();
const expHbs = expHandlebars.create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  extname: "hbs",
  helpers: {
    favoriteTeam: favoriteTeam,
    list: list,
    knockoutjs: knockoutjs
  }
});

app.engine("hbs", expHbs.engine);

app.set("view engine", "hbs");
app.use('/modules', express.static(path.join(__dirname, 'node_modules')));

app.use("/", routes);

app.listen(PORT, (req, res) => {
  console.log(`server started at port ${PORT}, http://localhost:${PORT}`)
});