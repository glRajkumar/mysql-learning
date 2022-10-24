const express = require('express')
const connectDb = require('./db')

const app = express()
connectDb()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

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

const port = process.env.PORT || 5002
app.listen(port, () => console.log(`App is running on ${port}`))