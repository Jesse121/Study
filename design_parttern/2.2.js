var Book = (function(){
    //静态私有变量
    var bookNum = 0;
    //静态私有方法
    function checkBook(name){}
    //创建类
    function _book(newId,newName,newPrice){
        //私有变量
        var name,price;
        //私有方法
        function checkId(id){}
        //特权方法
        this.getName = function(){};
        this.getPrice = function(){};
        this.setName = function(){};
        this.setPrice = function(){};
        //公有属性
        this.id = newId;
        //公有方法
        this.copy = function(){};
        bookNum ++ ;
        if(bookNum > 100){
            throw new Error('error');
        }
        //构造器
        this.setName(name);
        this.setPrice(price);
    }
    //构建原型
    _book.prototype = {
        //静态公有属性
        isJSBook:false,
        //静态公有方法
        display:function(){}
    };
    return _book;
})();
var Book = function(title,time,type){
    if(this instanceof Book){
        this.title = title;
        this.time = time;
        this.type = type;
    }else{
        return new Book(title,time,type);
    }
};
var book = Book('javascript','2018','js');
