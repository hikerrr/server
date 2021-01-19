#!/usr/bin/env node

import Debug from 'debug';
import https from 'https';
import http from 'http';
import app from '../app';
import fs from 'fs';

const debug = new Debug('hikerr:server');

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      debug(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      debug(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

let options;
let server;

if (process.env.NODE_ENV === 'production') {
  options = {
    ca: fs.readFileSync('/root/server/certs/chain.pem'),
    key: fs.readFileSync('/root/server/certs/privkey.pem'),
    cert: fs.readFileSync('/root/server/certs/cert.pem')
  };
  server = https.createServer(options,app);
}
else {
  server = http.createServer(app);
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
