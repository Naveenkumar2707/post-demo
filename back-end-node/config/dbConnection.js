var mysql = require('mysql');
var config = require('config');

let dbConfig = config.get('dbConfig');
dbConfig['password'] = config.get('dbConfig.password');

var connection = mysql.createConnection(dbConfig);
connection.connect((err, db) => {
    if (err) {
      console.log("error", err)
    }
   
      console.log('connect')
  })
module.exports = connection