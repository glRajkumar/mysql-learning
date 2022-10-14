const { Sequelize } = require('sequelize')
const db = require('../db')

const Post = db.define("posts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
}, {
  timestamps: false
})

module.exports = Post