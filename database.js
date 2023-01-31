var mysql = require("mysql");

var connecttion = mysql.createConnection({
    host : 'localhost',
    database : 'mgr',
    user : 'root',
    password : ''
});

connecttion.connect(function(error){
    if (error) throw error;
    console.log('Successfully connected to Mysql mqr databse');
});

module.exports = connecttion;
