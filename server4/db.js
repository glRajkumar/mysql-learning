const db = require('./models')

const connectDb = () => {
  db.sequelize.authenticate()
    .then(() => console.log("Connected Db"))
    .catch(err => console.log("Error connecting db", err))
}

module.exports = connectDb