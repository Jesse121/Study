const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var result = await mysql('note').orderBy('time', 'desc')
  ctx.state.data = {
    msg: result
  }
}