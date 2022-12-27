const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === '/') {
    res.end('Welcome to our Home page!')
  }
  if (req.url === '/about') {
    res.end('Here\'s a short story about us....')
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Go back</a>
  `)
})

server.listen(3000)

