const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.use('/profile', (req,res,next) => {
  res.sendFile(path.join(rootDir, '/public/html', 'profile.html'));
})

module.exports = router;