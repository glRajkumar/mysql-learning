const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot get all users" })
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
    res.status(400).json({ err, msg: "Cannot get user by id" })
  }
})

router.post("/", async (req, res) => {
  const data = req.body

  try {
    const user = await User.create(data)
    res.send(user)

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot create new user" })
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
    res.status(400).json({ err, msg: "Cannot update user by id" })
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    await User.destroy({ where: { id } })
    res.send("deleted")

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot delete user by id" })
  }
})

module.exports = router