const net = require("net");

// establishes a connection with the game server
const connect = function () {
 // 
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541// PORT number here,
  });
  //conn.on("Successfully connected to game server" );
  conn.on('data', (data) => {
      console.log("Successfully connected to game server");
      console.log(data);
    })

    const name = "tar";
    conn.write('Name: Tar');

    //move operation
    // number = [1, 2, 3,4,5];
    // for(let i of number){
    //   setTimeout(() => {
    //     conn.write("Move : Up");
    //   }, i += 500);
    // }
    conn.write("Move : Up");
  conn.setEncoding("utf8");
  conn.write(`${name} has connected!!!`);
 

  const handleUserInput = function (data) {
    // your code here
    if(data === 'w'){
      conn.write("Bye");
      process.exit();
    }
  };
  
  


 
  return conn;

}

module.exports = connect ;
