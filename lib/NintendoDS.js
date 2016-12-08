var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function NintendoDS(gameConsole){
  GameConsole.call(this,"Nintendo DS");
}

function extend(destination, source) {
  for (var k in source.prototype) {
    if (source.prototype.hasOwnProperty(k)) {
      destination.prototype[k] = source.prototype[k];
    }
  }
  return destination;
}

extend(NintendoDS, GameConsole);
extend(NintendoDS, WebBrowser);

module.exports = NintendoDS;