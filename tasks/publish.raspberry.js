let ncp = require('ncp').ncp;

ncp.limit = 16;

let source = '/Users/cneuwirth/Office/Dev/smarthome/technical-prototype';
let destination = '/Volumes/Home\ Directory/Dev/smarthome/technical-prototype';

ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('done!');
});
