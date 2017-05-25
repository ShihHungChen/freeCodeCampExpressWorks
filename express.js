var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var crypto = require('crypto'); // 加密用
var app = express();
app.put('/message/:NAME', function(req, res){
    res.end(crypto.createHash('sha1').update(new Date().toDateString() + req.params.NAME).digest('hex'));
});
app.listen(process.argv[2]);