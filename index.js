<<<<<<< HEAD
Duc was here
=======
var path = require('path');

const express = require('express');
const loginRoutes = require('./routes/login');
const gameRoutes = require('./routes/game');
const menuRoutes = require('./routes/menu');
const leaderboardRoutes = require('./routes/leaderboard');
const settingsRoutes = require('./routes/settings');
const profileRoutes = require('./routes/profile');


const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));
app.use(loginRoutes);
app.use(gameRoutes);
app.use(menuRoutes);
app.use(leaderboardRoutes);
app.use(settingsRoutes);
app.use(profileRoutes);


app.use((req,res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/html', '404.html'));
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
>>>>>>> b134fc84dd00e817b24f27cd5d2fccceaf79ecfc
