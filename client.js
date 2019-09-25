const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  if (conn) {
    console.log("Successfully connected to the game server\n")
  };
  conn.on('connect', () => {
    console.log("hello")
      setTimeout(() => conn.write("Move: left"), 100)
      setTimeout(() => conn.write("Move: down"), 200)
      setTimeout(() => conn.write("Move: left"), 300)
      setTimeout(() => conn.write("Move: up"), 400)
      setTimeout(() => conn.write("Move: right"), 500)
  });
  
  // Direction commands
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  const myFunction = (data) => {
    console.log(data);
 }
  conn.on('data', (data) => {
    console.log(data);
 });

}

module.exports = {connect};

