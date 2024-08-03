const http = require('http');
let PORT = 4000;

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Hello Welcome From Server</h1>");
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Hello Welcome from About</h1>");
    } else if (req.url == '/about/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Hello Welcome from Contact</h1>");
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Page not Found</h1>");
    }
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})