var UI = require('./views/ui');
// var _ = require('lodash');

var app = function(){
  new UI();
}

window.addEventListener('load', app);
