//导入mysql依赖包，mysql属于第三方模块需要  npm install mysql
var mysql = require('mysql');
//配置数据库连接的信息
var connection = mysql.createConnection(
    {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "nodemysql"
    }
);
//连接数据库
connection.connect();
//查询数据库
connection.query("select * from user", function (error, results, fields) {
    //如果查询出错，抛出错误
    if (error) throw error;
    //查询成功输出结果
    console.log("results:", results);
});
//关闭连接
connection.end;