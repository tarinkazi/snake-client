let connection;


const handleUserInput = function(data) {
  if (data === 'c') {
    console.log("Exit")
    process.exit();
  } else if (data === 'w'){
    connection.write('Move: Up')
  } else if (data === 'a'){
    connection.write('Move: lest')
  } else if (data === 's'){
    connection.write('Move: down')
  } else if (data === 'd'){
    connection.write('Move: right')
  } else if (data === 'p'){
    connection.write('Yeah!!!!done it')
}
}

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput} ;