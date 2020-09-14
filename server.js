// Import Expresss framework
var express = require('express');
var app = express();

// route on a get request to the root /
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})

// route on a get request to /store
app.get('/store', function (req, res) {
   res.sendFile( __dirname + "/views/" + "store.html" );
})

// this is what starts our app on port 8081
var server = app.listen(8081, function () {

  var host = server.address().address;
  if (host === '::') host = 'localhost';
  var port = server.address().port;
   
  // log the address the app is running at
  console.log(`Example app listening at http://${host}:${port}`);
})