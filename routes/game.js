const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.use('/index', (req,res,next) => {
  res.sendFile(path.join(rootDir, '/public/html', 'index.html'));
})

module.exports = router;