const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('earth/index.ejs', {
    element: 'Earth 🌎',
    urlPrefix: 'earth',
    signs: ['Taurus', 'Virgo', 'Capricorn'],
    traits: ['Grounded', 'Helpful', 'Practical', 'Realistic', 'Materialistic', 'Dependable']
  })
})

router.get('/virgo', (req, res) => {
  res.render('earth/virgo', { sign: 'virgo' })
})

router.get('/capricorn', (req, res) => {
  res.render('earth/capricorn', { sign: 'capricorn' })
})

router.get('/taurus', (req, res) => {
  res.render('earth/taurus', { sign: 'taurus' })
})

module.exports = router