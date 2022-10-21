const { Sequelize } = require('sequelize')
const db = require('../db')

const Comments = db.define("Comments", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: Sequelize.STRING
  }
})

module.exports = Comments