var _ = require('lodash');

var Contents = function () {};

Contents.prototype.getScriptFile = function (scriptsPaths) {
  let _import = '#= require ';
  let content = '';
  _.forEach(scriptsPaths, function (style) {
    if (!style.indexOf('/') == -1 && !style.indexOf('*') == -1) {
      content += _import + style + '\n'
    }
  })
  return content;
};

Contents.prototype.getStylesFile = function (stylesPaths) {
  let _import = '@import "';
  let content = '';
  _.forEach(stylesPaths, function (style) {
    if (style.indexOf('/') == -1 && style.indexOf('*') == -1) {
      content += _import + style + '";\n'
    }
  })
  return content;
};


module.exports = new Contents;
