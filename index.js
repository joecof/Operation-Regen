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
  app.get('/', (req, res) => {
<<<<<<< HEAD
    res.sendFile(path.join(__dirname = 'client/build/index.html'));
=======
    res.sendfile(path.join(__dirname = 'client/build/index.html'));
>>>>>>> c99eceb71c13fbdba9ac17814f30bedf0bcf9134
  })

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.use((req,res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/html', '404.html'));
})

// app.listen(3001, () => {
//   console.log("Server running on port 3001");
// });

app.listen(process.env.PORT || 3001, function(){
  console.log('Your node js server is running');
});


