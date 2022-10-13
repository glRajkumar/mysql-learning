const express = require('express')

const router = express.Router()

// create post table
router.get("/create-post-table", (req, res) => {
  const db = req.app.get('db')
  const query = "CREATE TABLE posts(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), content TEXT)"

  db.query(query, (err, result) => {
    if (err) return res.status(400).json({ err, msg: "" })
    res.send(result)
  })
})

// get all post in table
router.get("/", async (req, res) => {
  const db = req.app.get('db')
  const query = "SELECT * FROM posts"

  db.query(query, (err, result) => {
    if (err) return res.status(400).json({ err, msg: "" })
    res.send(result)
  })
})

// get particular post by id
router.get("/:id", async (req, res) => {
  const db = req.app.get('db')
  const postId = req.params.id
  const query = `SELECT * FROM posts WHERE id=${postId}`

  db.query(query, (err, result) => {
    if (err) return res.status(400).json({ err, msg: "" })
    res.send(result)
  })

  // const query = "SELECT * FROM posts WHERE id=?"

  // db.query(query, postId, (err, result) => {
  //   if (err) return res.status(400).json({ err, msg: "" })
  //   res.send(result)
  // })
})

// get particular post's title by id
router.get("/title/:id", async (req, res) => {
  const db = req.app.get('db')
  const postId = req.params.id
  const query = `SELECT title FROM posts WHERE id=${postId}`

  db.query(query, (err, result) => {
    if (err) return res.status(400).json({ err, msg: "" })
    res.send(result)
  })
})

// create new post 
router.post("/", async (req, res) => {
  const db = req.app.get('db')
  const query = "INSERT INTO posts SET ?"
  const data = req.body

  db.query(query, data, (err, result) => {
    if (err) return res.status(400).json({ err, msg: "" })
    res.send(result)
  })
})

// update post 
router.put("/:id", async (req, res) => {
  const db = req.app.get('db')
  const postId = req.params.id
  const query = `UPDATE posts SET ? WHERE id=${postId}`
  const data = req.body

  db.query(query, data, (err, result) => {
    if (err) return res.status(400).json({ err, msg: "" })
    res.send(result)
  })
})

// drop post table
router.delete("/", async (req, res) => {
  const db = req.app.get('db')
  const query = "DROP TABLE posts"

  db.query(query, (err, result) => {
    if (err) return res.status(400).json({ err, msg: "" })
    res.send(result)
  })
})

// delete particular post by id
router.delete("/:id", async (req, res) => {
  const db = req.app.get('db')
  const postId = req.params.id
  const query = `DELETE FROM posts WHERE id=${postId}`

  db.query(query, (err, result) => {
    if (err) return res.status(400).json({ err, msg: "" })
    res.send(result)
  })
})

module.exports = router