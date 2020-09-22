const expess = require("express");
const handlebars = require("express-handlebars");

const app = expess();
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.listen(7171, (req, res) => {
  console.log("server started at port 7171, http://localhost:7171")
});