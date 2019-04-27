const express = require('express');
const app = express();


app.get('/', function(request, response) {
    
  response.sendfile('./index.html');
  response.send('Operation Regen!');
  response.send(dom.serialize());

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});