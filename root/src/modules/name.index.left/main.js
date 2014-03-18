define(function (require, exports, module) {
    /**
     * require
     * ===================================================
     */
    var $ = require('$'),
        moduleFactory = require('crystal'),
        helper = require('./../../common/helper'),
        uiTpl = require('./ui.handlebars')
    //Need to delete!!
    alert(uiTpl({"title": "test data", "body": "it is the test data,please delete it later!"}, {helpers: helper}))
    /**
     * module
     * ===================================================
     */
    var myModule = moduleFactory({
        /**
         * 代理事件
         */
        events      : {
        },
        /**
         * 载入立即绑定
         */
        initHook    : function () {
        },
        /**
         * 组件执行之后，再进行绑定
         */
        initData    : function () {
        },
        someFunction: function () {
            var host = this
        }
    })
    module.exports = myModule
    /**
     * tools
     * ===================================================
     */
    function someFn() {
        return 'something'
    }
})
