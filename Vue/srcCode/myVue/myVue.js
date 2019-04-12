
function MyVue(options) {
    this._init(options);
}
MyVue.prototype._init = function (options) {
    this.$options = options; // options 为上面使用时传入的结构体，包括el,data,methods
    this.$el = document.querySelector(options.el);
    this.$data = options.data;
    this.$methods = options.methods;
    this._binding = {};
    this._obverse(this.$data);
    this._complie(this.$el);
}
MyVue.prototype._obverse = function (obj) {
    var value;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            this._binding[key] = {
                _directives: []
            };
            value = obj[key];
            if (typeof value === 'object') {
                this._obverse(value);
            }
            var binding = this._binding[key];
            Object.defineProperty(obj, key, {
                enumerable: true,
                configurable: true,
                get: function () {
                    console.log(`获取 ${value}`);
                    return value;
                },
                set: function (newVal) {
                    console.log(`更新 ${newVal}`);
                    if (value !== newVal) {
                        value = newVal;
                        // 当value改变时，触发_binding[value]._directives 中的绑定的Watcher类的更新
                        binding._directives.forEach(function (item) {
                            item.update();
                        })
                    }
                }
            })
        }
    }
}
MyVue.prototype._complie = function (root) {
    var _this = this;
    var nodes = root.children;
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.children.length) {
            this._complie(node);
        }

        if (node.hasAttribute('v-click')) {
            node.onclick = (function () {
                var attrVal = nodes[i].getAttribute('v-click');
                return _this.$methods[attrVal].bind(_this.$data);
            })();
        }

        if (node.hasAttribute('v-model') && (node.tagName == 'INPUT' || node.tagName == 'TEXTAREA')) {
            node.addEventListener('input', (function (key) {
                var attrVal = node.getAttribute('v-model');
                _this._binding[attrVal]._directives.push(new Watcher('input', node, _this, attrVal, 'value'))
                return function () {
                    _this.$data[attrVal] = nodes[key].value;
                }
            })(i));
        }

        if (node.hasAttribute('v-bind')) {
            var attrVal = node.getAttribute('v-bind');
            _this._binding[attrVal]._directives.push(new Watcher('text', node, _this, attrVal, 'innerHTML'))
        }
    }
}

function Watcher(name, el, vm, exp, attr) {
    this.name = name; //指令名称，例如文本节点，该值设为 "text"
    this.el = el; //指令对应的DOM元素
    this.vm = vm; //指令所属MyVue实例
    this.exp = exp; //指令对应的值，本例如 "number"
    this.attr = attr; //绑定的属性值，本例为 "innerHTML"
    this.update();
}
Watcher.prototype.update = function () {
    this.el[this.attr] = this.vm.$data[this.exp];
}


