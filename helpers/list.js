const Handlebars = require('handlebars');

var helper = (values, options) => {
  var result = `<div style="margin-top:20px;">${options.fn({count: values.length})}</div><ul>`;
  
  for(var element of values)
    result += `<li>${options.fn({team: element})}</li>`;
  
  result += `</ul>`;

  result = new Handlebars.SafeString(result);
  
  return result;
};

module.exports = helper;