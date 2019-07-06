module.exports = function(content){
    if(this.cacheable){
        this.cacheable()
    }
    var userStrictPrefix = '\'user strict\';\n\n';
    return userStrictPrefix+content
}
