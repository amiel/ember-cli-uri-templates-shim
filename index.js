/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-uri-templates-shim',

  options: {
    nodeAssets: {
      'uri-templates': {
        import: ['uri-templates.js']
      }
    }
  }
};
