const { Sequelize } = require('sequelize')
require('dotenv').config()

const db = new Sequelize(
  process.env.Mysql_Db,
  process.env.Mysql_User,
  process.env.Mysql_Pass,
  {
    dialect: 'mysql',
    host: process.env.Mysql_Host,
    operatorsAliases: false
  }
)

module.exports = db