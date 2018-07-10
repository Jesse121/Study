(function(global,factory){
    console.log(module)
    //cmd commonJS模块化
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        //amd模块化
        typeof define === 'function' && define.amd ? define(factory) : (global.Vue = factory());
}(this,(function(){
    //vue代码
})));