var path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`${req.body.post}`,);
})

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
  })

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


app.use((req,res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/html', '404.html'));
})

app.listen(3001, () => {
  console.log("Server running on port 3001");
});

