const http = require('http');
const app = require('./app');
const socket = require('./socket');
const config = require('./config/config');

const port = normalizePort(process.env.PORT || config.server.port);
const server = http.createServer(app);

socket(server);

server.listen(port, function() {
  console.log(`listening on ${port}`);
});

function normalizePort(value) {
  const port = parseInt(value, 10);
  
  if (isNaN(port)) {
    return value;
  }
  
  if (port >= 0) {
    return port;
  }
  
  return false;
}
