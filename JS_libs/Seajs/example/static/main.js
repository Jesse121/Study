define(function(require, exports, module) {
  var changeText = require('./changeText');
  var $ = require('jquery');
  $('#title').text(changeText.init());
})