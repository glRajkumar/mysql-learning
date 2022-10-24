const db = require('./models')

const connectDb = () => {
  db.sequelize.authenticate()
    .then(() => console.log("Connected Db"))
    .catch(err => console.log("Error connecting db", err))

  db.sequelize.sync({ alter: true })
    .then(() => console.log('re-sync is done'))
    .catch(err => console.log("Error syncing in db", err))
}

module.exports = connectDb