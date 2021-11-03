const net = require("net");
const connect = require("./client");



const conn = connect();


  // interpret incoming data as text
  // const name = "tarin";
  // conn.setEncoding("utf8");
  // conn.write(`${name} has connected!!!`);
const stdin = process.stdin;

  stdin.on('data', (input) => {
    conn.write(`${name}: ${input}`);
  })

  // return conn;
//};

