const debug = require('debug')('green-gorilla:routes/index');
const express = require('express');
const Client = require('oc-client');

const router = express.Router();

router.get('/', (req, res) => {
  const client = new Client({ registries: { serverRendering: 'http://localhost:3030/' } });

  const components = [
    { name: 'oc-client' },
    { name: 'oc-green-gorilla-app' }
  ];

  client.renderComponents(
    components,
    {
      container: false,
      headers: {
        'Accept-Language': 'en-US'
      },
      timeout: 3.0
    }, (errors, htmls) => {
      if (errors) {
        debug('errors:', errors);
      }
      debug('htmls:', htmls);
      const model = {
        components: {
          'oc-client': htmls[0],
          'oc-green-gorilla-app': htmls[1]
        },
        appCssPath: process.env.APP_CSS_PATH,
        appJsPath: process.env.APP_JS_PATH

      };
      res.render('index', model);
    });
});

module.exports = router;
