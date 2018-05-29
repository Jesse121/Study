var OptPool = require('./models/OptPool');

var optPool = new OptPool();
var pool = optPool.getPool();

//执行SQL语句
pool.getConnection(function(err, conn) {
    //----插入
    var userAddSql = 'insert into user (name,pwd) values(?,?)';
    var param = ['eee', '123'];
    conn.query(userAddSql, param, function(err, rs) {
        if (err) {
            console.log('insert err:', err.message);
            return;
        }
        console.log('insert success');
        //放回连接池
        //conn.release();
    })
    //查询
    conn.query('SELECT * from user', function(err, rs) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        for (var i = 0; i < rs.length; i++) {
            console.log(rs[i].name);
        }
        conn.release(); //放回连接池
    });
});