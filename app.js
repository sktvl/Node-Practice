var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var urlencodedparser = bodyparser.urlencoded({ extended: false });
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
// app.get('/home', function (req, res) {
//     res.send("usrname:" + req.query['usrname'] + "<br> email:" + req.query['email'] + "<br> Telephone:" + req.query['telphone']);
// });

app.post('/home', urlencodedparser, function (req, res) {
    res.send("usrname:" + req.body.usrname + "<br> email:" + req.body.email + "<br> Telephone:" + req.body.telphone);
});
app.listen(8080);