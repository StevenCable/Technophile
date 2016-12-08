var Watch = require('./Watch');
var Tablet = require('./Tablet');

function SmartWatch(){
  Watch.call(this);
}
function extend(destination, source) {
  for (var k in source.prototype) {
    if (source.prototype.hasOwnProperty(k)) {
      destination.prototype[k] = source.prototype[k];
    }
  }
  return destination;
}

extend(SmartWatch,Watch);
extend(SmartWatch,Tablet);

module.exports = SmartWatch;