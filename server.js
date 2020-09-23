const expess = require("express");
const expHandlebars = require("express-handlebars");
const path = require("path");

const app = expess();
const expHbs = expHandlebars.create({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  extname: "hbs"
});

expHbs.handlebars.registerHelper('favoriteTeam', (team, someValue) => {
  return new expHbs.handlebars.SafeString(
    "<h2>Η καλύτερη ομάδα είναι ο " + team + "</h2><strong>" + someValue + "</strong>");
});

app.engine("hbs", expHbs.engine);

app.set("view engine", "hbs");
app.use('/modules', expess.static(path.join(__dirname, 'node_modules')));

// routing

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page", name: "Panagiotis", displayName: true });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page", copywrite: "(c) Panagiotis" });
});

app.get("/helpers/each", (req, res) => {
  res.render("each", {
    title: "Each Helper Page", teams: [
      "PAOK",
      "ARIS",
      "AEK",
      "REAL"
    ],
    user: { firstName: "PAKIS", lastName: "PAPAKIS" }
  });
});

app.get("/helpers/each2", (req, res) => {
  res.render("each2", {
    title: "Each2 Helper Page",
    warehouse: [
      { room: [{ product: "computers", price: 100 }, { product: "hifi", price: 70 }] },
      { room: [{ product: "cars", price: 1000 }, { product: "bikes", price: 170 }] },
      { room: [{ product: "tomatoes", price: 20 }, { product: "potatoes", price: 10 }] }
    ]
  });
});

app.get("/helpers/lookup", (req, res) => {
  res.render("lookup", {
    title: "Lookup Page",
    data: { subdata: { thevalue: "some value" } },
    teams: ["PAOK", "ARIS", "AEK", "REAL"]
  });
});

app.get("/helpers/customhelper", (req, res) => {
  res.render("customhelper", {
    title: "Custom Helper Page",
    data: { subdata: { thevalue: "some value" } },
    teams: ["PAOK", "ARIS", "AEK", "REAL"]
  });
});

app.get("/knockout", (req, res) => {
  res.render("knockout", {
    title: "knockout demo",
    someValue: "this is a handlebar value"
  });
});

// end routing

app.listen(7171, (req, res) => {
  console.log("server started at port 7171, http://localhost:7171")
});