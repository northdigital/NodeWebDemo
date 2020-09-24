const Handlebars = require('handlebars');

var helper = () => {
  return new Handlebars.SafeString(
    "import '/modules/knockout/build/output/knockout-latest.debug.js';");
};

module.exports = helper;
