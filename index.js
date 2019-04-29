
var path = require('path');

const express = require('express');
const loginRoutes = require('./routes/login');
const gameRoutes = require('./routes/game');


const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));
app.use(loginRoutes);
app.use(gameRoutes);

app.use((req,res,next) => {
  res.status(404).sendFile(path.join(__dirname, '/public/html', '404.html'));
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

