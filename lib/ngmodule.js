/**
 * This module defines a custom jsDoc tag.
 * It allows you to document angular modules.
 * @module lib/ngmodule
 */

'use strict';

exports.name ='ngmodule';
exports.options = {
  mustHaveValue: true,
  mustNotHaveDescription: false,
  canHaveType: true,
  canHaveName: true,
  isNamespace: true,
  onTagged: function(doclet, tag) {
    doclet.ngmodule = {
      'name': tag.value.name,
      'type': tag.value.type ? (tag.value.type.names.length === 1 ? tag.value.type.names[0] : tag.value.type.names) : '',
    };
  },
}
exports.newDocletHandler = function(e) {
  var ngmodule = e.doclet.ngmodule;
  if (ngmodule) {
    e.doclet.scope = 'ngmodule';
    e.doclet.description = `<h5>NgModule: </h5>
                            <span class="type">${ngmodule.type}</span>
                            <span class="name">${ngmodule.name}</span>
                            <span class="">${e.doclet.description}</span>`;
  }
}
