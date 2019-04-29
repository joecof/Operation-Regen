const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');

router.use('/settings', (req,res,next) => {
  res.sendFile(path.join(rootDir, '/public/html', 'settings.html'));
})

module.exports = router;