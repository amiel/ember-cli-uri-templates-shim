/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const stringReplace = require('broccoli-string-replace');


module.exports = {
  name: 'ember-cli-uri-templates-shim',

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/uri-templates/uri-templates.js');
    app.import('vendor/shims/uri-templates-shim.js');
  },

  treeForVendor(vendorTree) {
    let uriTree = new Funnel(path.dirname(require.resolve('uri-templates/uri-templates.js')), {
      destDir: 'uri-templates',
      files: ['uri-templates.js']
    });
    uriTree = stringReplace(uriTree, {
      files: ['uri-templates/uri-templates.js'],
      patterns: [{
        match: /typeof module !== 'undefined'/g,
        replacement: 'false'
      }, {
        match: /typeof define === 'function'/g,
        replacement: 'false'
      }]
    });

    return new mergeTrees([uriTree, vendorTree]);
  }
};
