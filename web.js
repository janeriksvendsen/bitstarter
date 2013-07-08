var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   response.send("1");
   fs.readFileSync("./index.html", function(err, data) {
      response.send("2");
      if(err) throw err;
      response.send("3");
      response.send(data.toString("utf-8"));
   });  
   response.send("4");
//response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
