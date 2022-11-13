require('dotenv').config()

module.exports = {
  development: {
    username: process.env.Mysql_User,
    password: process.env.Mysql_Pass,
    database: process.env.Mysql_Db,
    host: process.env.Mysql_Host,
    dialect: "mysql",
    // logging: false,
  },
  test: {
    username: process.env.Mysql_User,
    password: process.env.Mysql_Pass,
    database: process.env.Mysql_Db,
    host: process.env.Mysql_Host,
    dialect: "mysql",
    // logging: false,
  },
  production: {
    username: process.env.Mysql_User,
    password: process.env.Mysql_Pass,
    database: process.env.Mysql_Db,
    host: process.env.Mysql_Host,
    dialect: "mysql",
    // logging: false,
  }
}
