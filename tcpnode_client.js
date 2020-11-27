const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = net.createConnection({ port: 8124 }, () => {
  // 'connect' listener.
  console.log('connected to server!');
  client.write('world!\r\n');
});

console.log("message input:")
rl.on('line', (input) => {
        client.write(input);
});

client.on('data', (data) => {
  console.log(data.toString());
//   client.end();
});
client.on('end', () => {//客戶端連線中斷
  console.log('disconnected from server');
});