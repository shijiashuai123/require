require.config({
    paths:{
        "jquery": './assets/jquery-1.9.1.min',
        "lodash": "./assets/lodash",
        "text": './assets/text',
        "test1": './component/test1.html',
        "per": "./module/per",
        "person": "./module/person"
    },
    shim: { // 还有一个shim属性，专门用来配置不兼容的模块。具体来说，每个模块要定义（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。

    }
});
require(['jquery', 'lodash', "per", "person", "text"], function ($, _, per, person, text) {
    //通过此方式引入jquery才能使用$，接下来正常写jquery代码就好
    var jsurl = $('body').attr('my-js');
    require([jsurl], function () { });
    console.log(text)
})