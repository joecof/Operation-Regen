const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const port = 3001;

// includes db configuration info
let dbconfig = require(__dirname + '/config/db-config.json');

// mysql connection
let connection = mysql.createConnection(dbconfig);

connection.connect(function(err) {
  if (err) throw err;
  console.log('Database connected!');
});

// listen to get request: leaderboard query result
app.get('/LeaderBoard', (req, res) => {
  connection.query('SELECT userName, score, heroNo, levelNo FROM leaderboard ORDER BY score DESC, userName LIMIT 5', function(err, result) {
    if (!err) {
      res.json(result);
    } else {
      console.log('Error while retrieving leaderboard data');
    }
  });
});

// listen to get request: leaderboard max listNo query result
app.get('/ListNo', (req, res) => {
  connection.query("SELECT MAX(listNo) + 1 AS 'listNo' FROM leaderboard", function(err, result) {
    if (!err) {
      res.json(result);
    } else {
      console.log('Error while retrieving max listNo data');
    }
  });
});

// listen to get request: quote query result
app.get('/Quote', (req, res) => {
  connection.query('SELECT content, person FROM quote', function(err, result) {
    if (!err) {
      res.json(result);
    } else {
      console.log('Error while retrieving quote data');
    }
  });
});

// listen to post request: insert into leaderboard
app.post('/Progress', (req, res) => {
  console.log(req.body + ", " + req.data);
  /*connection.query('INSERT INTO leaderboard VALUES (3, ?, 333, 1, 3)', function(err, result) {  // , req.body
    if (!err) {
      res.json(result);
    } else {
      console.log('Error while inserting progress data into leaderboard');
    }
  });*/
  //res.end('Success');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use('/', express.static(path.join(__dirname,'../', 'public')));

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`${req.body.post}`,);
})

app.use(express.static(path.join(__dirname, '/../client/build')));
app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname = '/../client/build/index.html'));
})

app.use((req,res) => {
  res.status(404).sendFile(path.join(__dirname, '/../public/html', '404.html'));
})

app.listen(port, () => {
  console.log('Server running on port', port);
});
