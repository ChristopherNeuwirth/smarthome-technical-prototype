var args = process.argv, //running arguments from command line
    rpi433    = require('rpi-433'),
    rfEmitter = rpi433.emitter({pin: 0, pulseLength: 180}),
    switchGroups = require('./switch.groups.json')
    ;

function switchMe(group, power) {

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
        console.log('Code was not sent, reason: ', error);
      } else {
        console.log('Code sent: ', stdout);
      };
    });
  } else {
      console.log('No valid command. [group-id] [on/off]');
  }

}

switchMe(args[2], args[3]);
