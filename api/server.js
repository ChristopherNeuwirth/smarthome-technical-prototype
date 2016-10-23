const Hapi = require('hapi');
let SwitchModule = require('../automation/module-etekcity-switches/switch')

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: 8080
});

// Add the route
server.route({
  method: 'GET',
  path: '/switch/{group}/{state}',
  handler: function (request, reply) {
    const group = encodeURIComponent(request.params.group);
    const state = encodeURIComponent(request.params.state);

    let response = SwitchModule.switchMe(group, state);

    reply(response);
  }
});


// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
