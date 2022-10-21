const express = require('express')
const Comment = require('../models/comment')

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot get all comments" })
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const comment = await Comment.findOne({
      where: { id }
    })
    res.send(comment)

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot get comment by id" })
  }
})

router.post("/", async (req, res) => {
  const data = req.body

  try {
    const comment = await Comment.create(data)
    res.send(comment)

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot create new comment" })
  }
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const data = req.body

  try {
    const comment = await Comment.update(data, {
      where: { id }
    })
    res.send(comment)

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot update comment by id" })
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    await Comment.destroy({ where: { id } })
    res.send("deleted")

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot delete comment by id" })
  }
})

module.exports = router