const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var result = await mysql('note').del().where('id', ctx.request.body.id)
  ctx.state.data = result
}