const express = require('express')
const { Posts } = require('../models')

const router = express.Router()

// get all post in table (just for learning purpose only used)
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.findAll()
    res.send(posts)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot get all posts" })
  }
})

// get particular post by id
router.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const post = await Posts.findOne({
      where: { id },
    })
    res.send(post)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot get post by id" })
  }
})

// get all posts of the users 
router.get("/user/:userId", async (req, res) => {
  const { userId: UserId } = req.params

  try {
    const posts = await Posts.findAll({
      where: { UserId }
    })
    res.send(posts)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot get all posts" })
  }
})

// create new post 
router.post("/", async (req, res) => {
  const data = req.body

  try {
    const post = await Posts.create(data)
    res.send(post)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot create new post" })
  }
})

// update post 
router.put("/:id", async (req, res) => {
  const { id } = req.params
  const data = req.body

  try {
    const post = await Posts.update(data, {
      where: { id }
    })
    res.send(post)

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot update post by id" })
  }
})

// delete particular post by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    await Posts.destroy({ where: { id } })
    res.send("deleted")

  } catch (err) {
    res.status(400).json({ err, msg: "Cannot delete post by id" })
  }
})

module.exports = router