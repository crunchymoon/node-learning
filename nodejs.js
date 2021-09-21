let http = require('http');
let fs = require('fs');
let _ = require('lodash');

let server = http.createServer((req, res) => {
    let random =_.random(0,15);
    console.log(random);
    
    res.setHeader('Content-Type', 'text/html');
    let path = './'
    switch (req.url) {
        case '/':
            path += 'nodejs.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location','/about')
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
});
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})
