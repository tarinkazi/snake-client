//const net = require("net");
const connect = require("./client");
const { setupInput } = require("./input");
 

console.log("Connecting ...");
const conn = connect();

setupInput(conn);
//const conn = connect();

// const stdin = process.stdin;

//   stdin.on('data', (input) => {
//     conn.write(`${name}: ${input}`);
//   })

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };