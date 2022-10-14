const express = require('express')
const db = require('./db')

const posts = require('./controllers/post')

const app = express()

db.authenticate()
  .then(() => console.log("Connected Db"))
  .catch(err => console.log("Error connecting db", err))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/post", posts)

app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message || "Internal Server Error"
    }
  })
})

const port = process.env.PORT || 5001
app.listen(port, () => console.log(`App is running on ${port}`))