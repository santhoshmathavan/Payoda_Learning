var express = require('express');
var app = express();
var logger = require("./config/logger");
var bodyParser = require('body-parser');

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/gfg'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.htmL', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htmL" );
})

var Schema = mongoose.Schema({
   first_name:String,
   last_name:String
})
var Model = mongoose.model("Model", Schema, "collections");;

app.get('/getdata',function(req,res){
   Model.find({},function(err, file) {
      if(err) throw err
      res.send(JSON.stringify(file));  
  });
})

app.get('/getusers',function(req,res){
   var name = req.query.name
   Model.find({"first_name":name},function(err, file) {
      if(err) throw err
      res.send(file);  
  });
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   // response = {
   //    first_name:req.body.first_name,
   //    last_name:req.body.last_name
   // };
   // console.log(response);
   // res.end(JSON.stringify(response));
   var first_name = req.body.first_name
   var second_name = req.body.last_name

   var data = {
      "first_name":first_name,
      "second_name":second_name,
   }
   db.collection('collections').insertOne(data,function(err,collection){
      if (err) throw err; 
      console.log("Record inserted Successfully"); 
   })
   return res.redirect('success.html'); 
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   logger.log('info',`Example app listening at port ${port}`)
})