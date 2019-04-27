const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});