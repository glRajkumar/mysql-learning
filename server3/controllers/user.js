const express = require('express')
const { Users } = require('../models')

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const users = await Users.findAll()
    res.send(users)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot get all users" })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const user = await Users.findOne({
      where: { id },
      include: "Posts"
    })
    res.send(user)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot get user by id" })
  }
})

router.post("/", async (req, res) => {
  const data = req.body

  try {
    const user = await Users.create(data)
    res.send(user)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot create new user" })
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const data = req.body

  try {
    const user = await Users.update(data, {
      where: { id }
    })
    res.send(user)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot update user by id" })
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    await Users.destroy({ where: { id } })
    res.send("deleted")

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot delete user by id" })
  }
})

module.exports = router