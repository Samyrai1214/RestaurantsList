const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const restaurants = require('./public/jsons/restaurants.json').results

app.use(express.static('public'))
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.render('index', { restaurants })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase().trim()

  // 在餐廳名稱或分類中搜尋符合的關鍵字
  const matchedRestaurants = restaurants.filter(item => 
    item.name.toLowerCase().includes(keyword) || 
    item.category.toLowerCase().includes(keyword)
  )

  // 分別導向沒有結果、未輸入關鍵字或搜尋結果頁面
  if (!matchedRestaurants.length) {
    res.render('no-result', {keyword})
  } else if (!keyword) {
    res.render('no-keyword')
  } else {
    res.render('index', { restaurants: matchedRestaurants, keyword })
  }
})

app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  const restaurant = restaurants.find(item => item.id.toString() === id)
  res.render('detail', {restaurant})
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})