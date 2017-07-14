/*jshint esversion: 6 */

const net = require('net');

var users = [];

const server = net.createServer((socket) => {

  users.push(socket);

  socket.on('data', (chunk) => {
    users.forEach(function(user){

      if(user === socket){
        return;
        }else{
        user.write(chunk);
        }
      });

    process.stdout.write(chunk);
  });
  socket.on('error', () => {
    users.splice(users.indexOf(socket), 1);
    broadcast(socket.name + " left the chat.");
  });

});

server.listen(6969, '0.0.0.0', () => {
  console.log('server bound');

});

