let rpi433    = require('rpi-433'),
    rfEmitter = rpi433.emitter({pin: 0, pulseLength: 180}),
    switchGroups = require('./switch.groups.json');

let switchMe = (group, power) => {
  let response;
  if(power === 'on' || power === 'off') {
    var switchGroup = switchGroups[group],
        signal = undefined;
        ;

    if(power === 'on') {
      signal = switchGroup.on;
    } else {
      signal = switchGroup.off;
    }

    rfEmitter.sendCode(signal, function(error, stdout) {
      if(error) {
        response = 'Code was not sent, reason: ' + error;
      } else {
        response = 'Code sent: ' + stdout;
      };
    });
  } else {
      response = 'No valid command';
  }
  return response;
}

module.exports.switchMe = switchMe;
