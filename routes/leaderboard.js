const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.use('/leaderboard', (req,res,next) => {
  res.sendFile(path.join(rootDir, '/public/html', 'leaderboard.html'));
})

module.exports = router;