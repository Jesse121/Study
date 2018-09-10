const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var result = await mysql('note').update({ content: ctx.request.body.content, time: (new Date()).getTime() }).where('id', ctx.request.body.id)
  ctx.state.data = result
}

