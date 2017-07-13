/*jshint esversion: 6 */

const net = require('net');
const server = net.createServer((c) => {

  console.log('client connected');
  c.on('close', () => {
    console.log('client disconnected');
  });
  c.on('data', (chunk) => {
    console.log(chunk);
  });
  /*c.write('hello\r\n');
  c.pipe(c);*/
});

server.listen(6969, '0.0.0.0', () => {
  console.log('server bound');

});
