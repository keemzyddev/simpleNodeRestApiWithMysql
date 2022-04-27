const mysql = require('mysql')

//create connection
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'testdb' 
   
  })
   
  connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack)
      return
    }
   
    console.log('connected as id ' + connection.threadId)
    
  }) 



  module.exports = connection