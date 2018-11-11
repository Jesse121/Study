module.exports = {
    port: 3000, //端口号
    session: {
        secret: 'Blog',
        key: 'Blog',
        maxAge: 6000000
    },
    mongodb: 'mongodb://localhost/Blog' //连接本地数据库
};
