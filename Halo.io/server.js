var express = require('express')
var app = express();
var port = process.env.port ||4000;
//app.use(express.static(_dirname+'/'))
app.get('/', function (req, res) {
res.sendfile(__dirname+ '/Vista.html');
}).listen(port);
app.get('/juego.js', function (req, res) {
    res.sendfile(__dirname + '/juego.js');
});
