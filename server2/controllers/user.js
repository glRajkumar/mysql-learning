const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)

  } catch (error) {
    res.status(400).json({ err, msg: "" })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findOne({
      where: { id }
    })
    res.send(user)

  } catch (error) {
    res.status(400).json({ err, msg: "" })
  }
})

router.post("/", async (req, res) => {
  const data = req.body

  try {
    const user = await User.create(data)
    res.send(user)

  } catch (error) {
    res.status(400).json({ err, msg: "" })
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const data = req.body

  try {
    const user = await User.update(data, {
      where: { id }
    })
    res.send(user)

  } catch (error) {
    res.status(400).json({ err, msg: "" })
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    await User.destroy({ where: { id } })
    res.send("deleted")

  } catch (error) {
    res.status(400).json({ err, msg: "" })
  }
})

module.exports = router