var mysql = require ('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database_PA"

});

db.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
});

module.exports = db;