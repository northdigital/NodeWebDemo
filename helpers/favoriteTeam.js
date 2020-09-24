const Handlebars = require('handlebars');

var helper = (team, someValue) => {
  return new Handlebars.SafeString(
    "<h2>Η καλύτερη ομάδα είναι ο " + team + "</h2><strong>" + someValue + "</strong>");
};

module.exports = helper;