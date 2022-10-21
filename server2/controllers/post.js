const express = require('express')
const Post = require('../models/post')

const router = express.Router()

// get all post in table
router.get("/", async (req, res) => {
  // Post.findAll()
  //   .then(posts => res.send(posts))
  //   .catch(err => res.status(400).json({ err, msg: "" }))

  try {
    const posts = await Post.findAll()
    res.send(posts)

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot get all posts" })
  }
})

// get particular post by id
router.get("/:id", async (req, res) => {
  const { id } = req.params

  // Post.findOne({ where: { id } })
  //   .then(posts => res.send(posts))
  //   .catch(err => res.status(400).json({ err, msg: "" }))

  try {
    const post = await Post.findOne({
      where: { id }
    })
    res.send(post)

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot get post by id" })
  }
})

// get particular post's title by id
router.get("/title/:id", async (req, res) => {
  const { id } = req.params

  // Post.findOne({ where: { id }, attributes: ["title"] })
  //   .then(posts => res.send(posts))
  //   .catch(err => res.status(400).json({ err, msg: "" }))

  try {
    const post = await Post.findOne({
      where: { id },
      attributes: ["title"]
    })
    res.send(post)

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot get post - title by id" })
  }
})

// create new post 
router.post("/", async (req, res) => {
  const data = req.body

  // Post.create(data)
  //   .then(posts => res.send(posts))
  //   .catch(err => res.status(400).json({ err, msg: "" }))

  try {
    const post = await Post.create(data)
    res.send(post)

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot create new post" })
  }
})

// update post 
router.put("/:id", async (req, res) => {
  const { id } = req.params
  const data = req.body

  // Post.update(data, { where: { id } })
  //   .then(posts => res.send(posts))
  //   .catch(err => res.status(400).json({ err, msg: "" }))

  try {
    const post = await Post.update(data, {
      where: { id }
    })
    res.send(post)

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot update post by id" })
  }
})

// delete particular post by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params

  // Post.destroy({ where: { id } })
  //   .then(() => res.send('deleted'))
  //   .catch(err => res.status(400).json({ err, msg: "" }))

  try {
    await Post.destroy({ where: { id } })
    res.send("deleted")

  } catch (error) {
    res.status(400).json({ err, msg: "Cannot delete post by id" })
  }
})

module.exports = router