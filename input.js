
const handleUserInput = function (data) {
  // your code here
  if(data === 'w'){
    //conn.write("Bye");
    process.exit();
  }
};


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput} ;