/*jshint esversion: 6 */

const net = require('net');
const user = net.createConnection({ port: 6969 }, '0.0.0.0', () => {

  console.log('connected to server!');
  /*user.write('world!\r\n');*/
  process.stdin.pipe(user);
});



user.on('data', (data) => {
  console.log(data.toString());
});
user.on('close', (data) => {
  console.log('disconnected from server');
});