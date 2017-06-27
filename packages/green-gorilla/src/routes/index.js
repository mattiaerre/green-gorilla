const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const model = {
    appCssPath: process.env.APP_CSS_PATH,
    appJsPath: process.env.APP_JS_PATH

  };
  res.render('index', model);
});

module.exports = router;
