const { ClientRequest } = require('http');
clients=[];
const net = require('net');
const server = net.createServer((c) => {
  // 'connection' listener.

  clients.push(c);

  console.log('client connected');
  c.on('end', () => {//接收到客戶端中斷連線
    console.log('client disconnected');
  });
  c.write('hello\r\n');
//   c.pipe(c);//直接回傳

  c.on('data',(data) => {
    c.write(data);
  });
 });
server.on('error', (err) => {
  throw err;
});
server.listen(8124, () => {
  console.log('server bound');
});

// var intervalID = setinterval(function(){
//     clients.forEach(socket => socket.write('c'))
// },1000);
var intervalID = setInterval(function() {
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    clients.forEach(socket => socket.write(datetime))
}, 1000);
