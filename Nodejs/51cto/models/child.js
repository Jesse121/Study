let parent = require('./parent');
function Child(id,name){
    parent.apply(this,[id,name]);
    this.say = function(){
        return 'i\'m '+this.name+',my ID is'+this.id;
    }
}
module.exports = Child;
