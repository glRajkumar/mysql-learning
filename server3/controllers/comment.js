const express = require('express')
const { Comments } = require('../models')

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const comments = await Comments.findAll()
    res.send(comments)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot get all comments" })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const comment = await Comments.findOne({
      where: { id }
    })
    res.send(comment)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot get comment by id" })
  }
})

router.post("/", async (req, res) => {
  const data = req.body

  try {
    const comment = await Comments.create(data)
    res.send(comment)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot create new comment" })
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const data = req.body

  try {
    const comment = await Comments.update(data, {
      where: { id }
    })
    res.send(comment)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot update comment by id" })
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    await Comments.destroy({ where: { id } })
    res.send("deleted")

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot delete comment by id" })
  }
})

module.exports = router