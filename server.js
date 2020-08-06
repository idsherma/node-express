const express = require('express');

const hostname = 'localhost';
const port = 3000; 

//`express()` => Creates an Express application. 
//`express()` is a top-level function exported by the express module.
const app = express();

//set up the server so that it returns
//the same response for any request
//middleware function in Express has access to 3 parameters
//req, res, and next (which is a function)
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});