//就是把 prod.env 能用的合并到 dev 里面去，其实就是一种配置继承，这样写可以方便修改和管理配置
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
