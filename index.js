// required packages
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// confiugure express
const app = express()
const port = 3000
app.set('view engine', 'ejs')

// middlewares
app.use(ejsLayouts)
app.use(express.static( "public"))
// home route
app.get('/', (req, res) => {
  res.render('index.ejs')
})

// controllers
app.use('/water', require('./controllers/water/controller.js'))
app.use('/air', require('./controllers/air/controller.js'))
app.use('/fire', require('./controllers/fire/controller.js'))
app.use('/earth', require('./controllers/earth/controller.js'))

// listen on a port
app.listen(port, err => {
  if (err) console.log(err)
  console.log(`listening to the smooth sounds of port ${port} in the morning 🌊`)
}) 