const dgram = require('dgram');//宣告常數dgram裡面意旨require('dgram')這個函式
const server = dgram.createSocket('udp4');//宣告常數server為常數dgram函式內容並設為IPv4,IPv6為udp6
const readline = require('readline');

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  server.send(msg,rinfo.port,rinfo.address);
});



server.bind(41234);
// Prints: server listening 0.0.0.0:41234