/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-uri-templates-shim',

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/shims/uri-templates-shim.js');
  },

  options: {
    nodeAssets: {
      'uri-templates': {
        import: ['uri-templates.js']
      }
    }
  }
};
