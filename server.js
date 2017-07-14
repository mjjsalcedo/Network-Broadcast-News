/*jshint esversion: 6 */

const net = require('net');

var users = [];

const server = net.createServer((socket) => {

  users.push(socket);

  socket.on('data', (chunk) => {
    broadcast(socket.name + "> " + chunk, socket);
  });
  socket.on('error', () => {
    users.splice(users.indexOf(socket), 1);
    broadcast(socket.name + " left the chat.");
  });

});

server.listen(6969, '0.0.0.0', () => {
  console.log('server bound');

});


function broadcast(message, sender){
  users.forEach(function(user){

    if(user === sender){
      return;
      }else{
      users.write(message);
      }
    });

    process.stdout.write(message);
  }