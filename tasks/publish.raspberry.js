let ncp = require('ncp').ncp;

ncp.limit = 16;

let source = '/Users/cneuwirth/Office/Dev/smarthome/technical-prototype';
let destination = '/Volumes/Home\ Directory/Dev/smarthome/technical-prototype';
let options = {
  filter: /^(?!.*node_modules).*$/
}

ncp(source, destination, options, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('done!');
});
