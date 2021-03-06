var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);


app.get('/about', middleware.requireAuthentication, function (req, res) {
  res.send('About us');
});
app.get('/contact', middleware.requireAuthentication, function (req, res) {
  res.send('Contact');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(PORT, function () {
  console.log('express server started');
  console.log('listening on port ' + PORT);
});
