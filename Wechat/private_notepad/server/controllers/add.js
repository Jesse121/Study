const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var result = await mysql('note').insert({ content: ctx.request.body.content, time: (new Date()).getTime() })
  ctx.state.data = result
}

// =======================================================================================
// select 
// 显示指定字段：var result = await mysql.select('name', 'id').from('user')
// sql：selece 'name', 'id' from `user`;

// 条件查询:var result = await mysql.select('id','name','openid' ).from('user').where('id',2)
// sql: select 'id','name','openid' form `user` where id=2;

// =======================================================================================
// update
// var result = await mysql('user').update({ name: 'root', openid: 'xubde724xie=395' }).where('id', 2)
// sql:update `user` set name='root', openid='xubde724xie=395' where id=2;

// =======================================================================================
// delete
// var result = await mysql('user').del().where('id', 3)
// sql:delete from `user` where id=3

// =======================================================================================
// insect
// var result = await mysql.insert({ name: 'cain' }, { openid: 'Ux6892Drfixbx'}).into('user')
// var result = await mysql('user').insert({ name: 'cain', openid: 'Ux6892Drfixbx' })
// sql: insert into `user` (`name`, `openid`) values (`cain`, `Ux6892Drfixbx`)

// 两种均可
// 会返回插入条目id序号 注意传入的数据类型与表字段的数据类型不符不会报错