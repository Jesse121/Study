var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'jesse',
    password: '',
    port: '3306',
    database: 'node'
});

connection.connect();
//增加
function add() {
    var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
    var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
    connection.query(addSql, addSqlParams, function(err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        console.log('INSERT ID:', result);
    });
}
//删除
function del() {
    var delSql = 'DELETE FROM websites where id=6';
    connection.query(delSql, function(err, result) {
        if (err) {
            console.log('[DELETE ERROR] - ', err.message);
            return;
        }
        console.log('DELETE affectedRows', result.affectedRows);
    });
}
//查询
function query() {
    var sql = 'SELECT * FROM websites';
    connection.query(sql, function(err, results, fields) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        console.log(results);
    });
}
//更改
function update() {
    var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
    var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6];
    connection.query(modSql, modSqlParams, function(err, result) {
        if (err) {
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }
        console.log('UPDATE affectedRows', result.affectedRows);
    });
}

// add();
// del();
query();
// update();



connection.end();
