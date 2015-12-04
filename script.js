var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Hey, pal');
});

app.post('/', function(req, res){
  res.send("I am getting a POST")
});
app.put('/place', function(req, res){
  res.send('Place or put my fork on the table, yeah?')
});
app.delete('/delto', function(req, res){
  res.send('Delete Megatron')
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
