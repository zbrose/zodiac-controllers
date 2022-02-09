const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('water/index.ejs', {
    element: 'Water 💧',
    urlPrefix: 'water',
    signs: ['Pisces', 'Cancer', 'Scorpio'],
    traits: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emo', 'Sensitive']
  })
})

router.get('/scorpio', (req, res) => {
  res.render('water/scorpio', { sign: 'scorpio' })
})

router.get('/cancer', (req, res) => {
  res.render('water/cancer', { sign: 'cancer' })
})

router.get('/pisces', (req, res) => {
  res.render('water/pisces', { sign: 'pisces' })
})

module.exports = router