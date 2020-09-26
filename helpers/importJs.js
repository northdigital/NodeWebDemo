const Handlebars = require('handlebars');

var helper = (jsImports, options) => {
  var result = `<script type="module">\n`;
  
  for(var jsImport of jsImports)
    result += options.fn({js: 'import "' + jsImport + '";'});
    
  result += `</script>`;

  return result;
};

module.exports = helper;