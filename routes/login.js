const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.get('/login', (req, res, next) => {
  res.sendFile(path.join(rootDir, '/public/html', 'login.html'))
});

router.post('/',(req, res, next) => {
  console.log(req.body);
  res.redirect('profile');
})

module.exports = router;