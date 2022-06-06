const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
      if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write("Error")
      } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end()
      }
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});