const express = require('express');
//create an express app:
const app = express();
//listen for requests:
app.listen(3000);

//register view engine:
app.set('view engine','ejs'); 

//with res.sendFile()
app.get('/', (req, res) => {
    res.sendFile('./views/nodejs.html', {
        root: __dirname
    });
});
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {
        root: __dirname
    });
});
//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})
//404
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {
        root: __dirname
    });
})