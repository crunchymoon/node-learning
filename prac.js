let http = require('http');
let server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html');
    res.write('<p>HEYYYYYY</p>');
    res.end();
    console.log('request made');
});

server.listen(3008, 'localhost', () => {
    console.log('listening for requests on port 3008')
})
