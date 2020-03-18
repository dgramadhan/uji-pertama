var mysql = require ('mysql');

var db = mysql.createConnection({
    DB_HOST: "remotemysql.com",
    DB_USER: "wAJsibpSOv",
    DB_PASSWORD: "lmQiJMOhzk",
    DB_DATABASE: "wAJsibpSOv"

});

// db.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected!");
// });

module.exports = db;
