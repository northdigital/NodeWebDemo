const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home Page", name: "Panagiotis", displayName: true });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About Page", copywrite: "(c) Panagiotis" });
});

router.get("/helpers/each", (req, res) => {
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

router.get("/helpers/each2", (req, res) => {
  res.render("each2", {
    title: "Each2 Helper Page",
    warehouse: [
      { room: [{ product: "computers", price: 100 }, { product: "hifi", price: 70 }] },
      { room: [{ product: "cars", price: 1000 }, { product: "bikes", price: 170 }] },
      { room: [{ product: "tomatoes", price: 20 }, { product: "potatoes", price: 10 }] }
    ]
  });
});

router.get("/helpers/lookup", (req, res) => {
  res.render("lookup", {
    title: "Lookup Page",
    data: { subdata: { thevalue: "some value" } },
    teams: ["PAOK", "ARIS", "AEK", "REAL"]
  });
});

router.get("/helpers/customhelper", (req, res) => {
  res.render("customhelper", {
    title: "Custom Helper Page",
    data: { subdata: { thevalue: "some value" } },
    teams: ["PAOK", "ARIS", "AEK", "REAL"]
  });
});

router.get("/knockout", (req, res) => {
  res.render("knockout", {
    title: "knockout demo",
    jsImportsBefore: ["/modules/knockout/build/output/knockout-latest.debug.js"],
    someValue: "this is a handlebar value"
  });
});

module.exports = router;