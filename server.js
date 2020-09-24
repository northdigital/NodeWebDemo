const express = require("express");
const expHandlebars = require("express-handlebars");
const path = require("path");
const routes = require("./routes/handlers");

const PORT = process.env.PORT || 7171;

const app = express();
const expHbs = expHandlebars.create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  extname: "hbs"
});

// registerHelper

expHbs.handlebars.registerHelper('favoriteTeam', (team, someValue) => {
  return new expHbs.handlebars.SafeString(
    "<h2>Η καλύτερη ομάδα είναι ο " + team + "</h2><strong>" + someValue + "</strong>");
});

expHbs.handlebars.registerHelper('list', (values, options) => {
  var result = `<div style="margin-top:20px;">${options.fn({count: values.length})}</div><ul>`;
  
  for(var element of values)
    result += `<li>${options.fn({team: element})}</li>`;
  
  result += `</ul>`;

  result = new expHbs.handlebars.SafeString(result);
  
  return result;
});

expHbs.handlebars.registerHelper('knockoutjs', () => {
  return new expHbs.handlebars.SafeString(
    "import '/modules/knockout/build/output/knockout-latest.debug.js';");
});

// end registerHelper

app.engine("hbs", expHbs.engine);

app.set("view engine", "hbs");
app.use('/modules', express.static(path.join(__dirname, 'node_modules')));

app.use("/", routes);

app.listen(PORT, (req, res) => {
  console.log(`server started at port ${PORT}, http://localhost:${PORT}`)
});