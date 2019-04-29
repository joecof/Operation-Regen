const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.use('/menu', (req,res,next) => {
  res.sendFile(path.join(rootDir, '/public/html', 'menu.html'));
})

module.exports = router;