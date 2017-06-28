const debug = require('debug')('green-gorilla:routes/index');
const express = require('express');
const Client = require('oc-client');

const router = express.Router();

router.get('/', (req, res) => {
  const client = new Client({ registries: { serverRendering: process.env.OC_REGISTRY_BASE_URL } });

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
        }
      };
      res.render('index', model);
    });
});

module.exports = router;
