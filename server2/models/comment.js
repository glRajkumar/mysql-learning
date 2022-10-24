const { Sequelize } = require('sequelize')
const db = require('../db')

const Comments = db.define("comments", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
})

module.exports = Comments