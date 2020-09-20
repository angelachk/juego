var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/build/'));

app.listen(port, () => {
    console.log('ExpressJS server listening on port', port);
});
