var mysql = require('mysql2');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"carandbike"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('connected');
    con.query("create database practice", function (err, result) {
        if (err) throw err;
        console.log('database created');
    });
});