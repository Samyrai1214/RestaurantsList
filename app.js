const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.send('listening restaurants')
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  res.send(`restaurant id: ${id}`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})