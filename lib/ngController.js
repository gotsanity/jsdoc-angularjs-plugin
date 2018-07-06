/**
 * This module defines a custom jsDoc tag.
 * It allows you to document angular modules.
 * @module lib/ngController
 */

'use strict';

exports.name ='ngController';
exports.options = {
  mustHaveValue: true,
  mustNotHaveDescription: false,
  canHaveType: true,
  canHaveName: true,
  onTagged: function(doclet, tag) {
    doclet.ngController = {
      'name': tag.value.name,
      'type': tag.value.type ? (tag.value.type.names.length === 1 ? tag.value.type.names[0] : tag.value.type.names) : '',
    };
  },
}
exports.newDocletHandler = function(e) {
  var ngController = e.doclet.ngController;
  if (ngController) {
    e.doclet.scope = 'ngController';
    e.doclet.description = `<h5>Angular.js Controller:</h5>
                            <span class="type">${ngController.type}</span>
                            <span class="name">${ngController.name}</span>
                            <span class="">${e.doclet.description}</span>`;
  }
}
