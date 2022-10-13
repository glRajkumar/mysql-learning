const mysql = require('mysql2')
require('dotenv').config()

let connectDB = async () => {
  const db = mysql.createConnection({
    host: process.env.Mysql_Host,
    user: process.env.Mysql_User,
    password: process.env.Mysql_Pass,
    database: process.env.Mysql_Db
  })

  db.connect((err) => {
    if (err) throw err
    console.log("Mysql connected")
  })
}

module.exports = connectDB