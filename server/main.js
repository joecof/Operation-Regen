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

connection.connect(function (err) {
  if (err) throw err;
  console.log('Database connected!');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use('/', express.static(path.join(__dirname,'../', 'public')));

// listen to get request: leaderboard query result
app.get('/LeaderBoard', (req, res) => {
  connection.query('SELECT userName, score, heroNo, levelNo FROM leaderboard ORDER BY score DESC, userName LIMIT 5', function (err, result) {
    if (!err) {
      res.json(result);
    } else {
      console.log('Error while retrieving leaderboard data');
    }
  });
});

<<<<<<< HEAD
// listen to get request: leaderboard max listNo query result -- WORK IN PROGRESS 
app.get('/ListNo', (req, res) => {
  connection.query("SELECT MAX(listNo) + 1 AS 'listNo' FROM leaderboard", function(err, result) {
    if (!err) {
      res.json(result);
    } else {
      console.log('Error while retrieving max listNo data');
    }
  });
});
=======
>>>>>>> ivan


// listen to get request: quote query result
app.get('/Quote', (req, res) => {
  connection.query('SELECT content, person FROM quote', function (err, result) {
    if (!err) {
      res.json(result);
    } else {
      console.log('Error while retrieving quote data');
    }
  });
});

<<<<<<< HEAD
let listNo = 1;

//listen to post request: insert into leaderboard
app.post('/Progress', (req, res) => {
  listNo++;
  console.log('name: ' + req.body.name);
  console.log('score' + req.body.score);

  //res.send(req.body);
  connection.query("INSERT INTO leaderboard VALUES (" + listNo + " ,?, ?, 3, 3) ", req.body.name, function(err, result) {  // , req.body
    if (!err) {
      res.json(result);
    } else {
      console.log(err);
=======
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../', 'public')));

//listen to post request: insert into leaderboard
app.post('/Progress', (req, res) => {

  let info = req.body;
  console.log(info)
  let sql = "INSERT INTO leaderboard(username,score,heroNo,levelNo) VALUES (?, ?, ?, ?)";
  let data = [info.name,info.score,info.hero,info.level];

  // execute the insert statment
  connection.query(sql,data, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
>>>>>>> ivan
    }
    
  });
<<<<<<< HEAD
  // res.end('Success');
});

// app.use(express.static(path.join(__dirname, '/../client/build')));
// app.get('/', (req, res) => {
//   res.sendfile(path.join(__dirname = '/../client/build/index.html'));
// })
=======

});

app.use(express.static(path.join(__dirname, '/../client/build')));
app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname = '/../client/build/index.html'));
})

>>>>>>> ivan

app.listen(port, () => {
  console.log('Server running on port', port);
});
