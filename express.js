console.log(process.argv);
var fs = require('fs');
var express = require('express');
var app = express();
app.set('json spaces', 0);
app.get('/books', function(req, res){
    fs.readFile(process.argv[3], function(err, data){
        if(err){
            return res.send(500);
        }
        try{
            var file_object = JSON.parse(data);
        } catch(err){
            res.send(500);
        }
        res.json(file_object);
        res.json(file_object);
    });
})
app.listen(process.argv[2]);