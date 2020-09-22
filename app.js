const expess = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const app = expess();

app.engine("hbs", handlebars({
  defaultLayout: "",
  //layoutsDir: path.join(__dirname, "views/layouts"),
  //partialsDir: path.join(__dirname, "views/partials"),
  extname: "hbs"
}));

app.set("view engine", "hbs");

// routing

app.get("/", (req, res) => {
  res.render("index");
});

// end routing

app.listen(7171, (req, res) => {
  console.log("server started at port 7171, http://localhost:7171")
});