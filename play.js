const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const name = "tarin";
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.write(`${name} has connected!!!`);
const stdin = process.stdin;
conn.on('data', (data) => {
  //  console.log("Message from server recieved!!!");
    console.log(data);
  })
  stdin.on('data', (input) => {
    conn.write(`${name}: ${input}`);
  })

  return conn;
};





  

console.log("Connecting ...");
connect();
