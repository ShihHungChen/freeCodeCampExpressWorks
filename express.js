var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = express();
app.use(express.static(process.argv[3]));
app.use(require('stylus').middleware(process.argv[3]));
/*app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res){
   res.end(req.body.str.split('').reverse().join(''));
});*/
app.listen(process.argv[2]);