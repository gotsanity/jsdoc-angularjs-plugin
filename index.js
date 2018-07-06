/**
 * This module defines custom JDOC tags for documenting Angular.js Projects.
 * This was developed using the jsdoc-route-plugin at https://github.com/bvanderlaan/jsdoc-route-plugin as a guide. 
 * @module jsdoc-angularjs-plugin
 * @author Jesse Harlan
 */

'use strict';

// const authenticationTag = require('./lib/authentication');
const ngmoduleTag = require('./lib/ngController');
// const bodyParameterTag = require('./lib/bodyparam');
// const headerParameterTag = require('./lib/headerparam');
// const queryParameterTag = require('./lib/queryparam');
// const routeParameterTag = require('./lib/routeparam');

exports.defineTags = function(dictionary) {
  // dictionary.defineTag(authenticationTag.name, authenticationTag.options);
  dictionary.defineTag(ngControllerTag.name, ngControllerTag.options);
  // dictionary.defineTag(bodyParameterTag.name, bodyParameterTag.options);
};

exports.handlers = {
  newDoclet: function(e) {
    // authenticationTag.newDocletHandler(e);
    // bodyParameterTag.newDocletHandler(e);
    ngControllerTag.newDocletHandler(e);
  }
}
