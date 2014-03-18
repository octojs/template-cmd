define(function (require, exports, module) {
    var $ = require('$')
    require('../{%= name %}.index.left/main').connectTo($('#content'))
});