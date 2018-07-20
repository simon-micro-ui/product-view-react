//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/hello-world.html', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/hello-world.html'));
});

app.get('/index.html', function(req,res) {
    console.log('__dirname:'+__dirname);
    res.sendFile(path.join(__dirname+'/index.html'));
});

console.log("Starting server on port 8082");
app.listen(process.env.PORT || 8082);