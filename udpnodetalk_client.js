const dgram = require('dgram');
const { exit } = require('process');
const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('Input:', (answer) => {
//     // TODO: Log the answer in a database
//     client.on('message', (msg, rinfo) => {
//         console.log(`client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
//       });
//     client.send(answer, 41234, 'localhost',(err) =>{
//         console.log('client send message...')
//     });
//     if(answer=='x'){
//         client.close();
//     }
//      rl.close();
// });
console.log("message input:")
rl.on('line', (input) => {
        client.on('message', (msg, rinfo) => {
        console.log(`Server: ${msg}`);
      });
    client.send(input, 41234, 'localhost',(err) =>{
        console.log('client send message...')
    });
    if(input=='x'){
        client.close();
        rl.close();
    }
});



