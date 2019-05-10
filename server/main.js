var path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const port = 3001;

// Includes db configuration info
let dbconfig = require(__dirname + '/config/db-config.json');

// mysql connection
let connection = mysql.createConnection(dbconfig);

connection.connect(function(err) {
  if (err) throw err;
  console.log('Database connected!');
  connection.query('SELECT * FROM user', function(err, result) {
    if (err) throw err;
    console.log('Query result: ' + JSON.stringify(result));
  });
});

// Includes leaderboard query result in the URL
app.get('/LeaderBoard', (req, res) => {
  connection.query('SELECT userName, score, heroNo, levelNo FROM leaderboard WHERE score = (SELECT MAX(score) FROM leaderboard)', function(err, result) {
    if (!err) {
      res.json(result);
    } else {
      console.log('Error while retrieving leaderboard data');
    }
  });
  //connection.end();  // disconnect db
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../public'));

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`${req.body.post}`,);
})

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  app.use(express.static(path.join(__dirname, '/../client/build')));
  app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname = '/../client/build/index.html'));
  })

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.use((req,res) => {
  res.status(404).sendFile(path.join(__dirname, '/../public/html', '404.html'));
})

const server = app.listen(port, () => {
  console.log('Server running on port', port);
});
