var express = require('express');
var app = express();
var mongojs = require('mongojs');
var bodyParser = require('body-parser')
var db = mongojs("mongodb://localhost:27017/contactlist", ["contactlist"]);

app.use(express.static(__dirname+"/public"))
app.use(bodyParser.json())


app.get('/contactlist', function(req, res){
    db.contactlist.find(function(err, docs){
        res.json(docs)
    })
});


app.post('/contactlist', function(req, res){
   db.contactlist.insert(req.body, function(err, docs){
    res.json(docs)
   })
})

app.listen(3000);
console.log("Server running at PORT:3000")