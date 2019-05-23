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
    }
    
  });
  // res.end('Success');
});

// app.use(express.static(path.join(__dirname, '/../client/build')));
// app.get('/', (req, res) => {
//   res.sendfile(path.join(__dirname = '/../client/build/index.html'));
// })

app.listen(port, () => {
  console.log('Server running on port', port);
});
