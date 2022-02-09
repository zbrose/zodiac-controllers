const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('fire/index.ejs', {
    element: 'Fire 🔥',
    urlPrefix: 'fire',
    signs: ['Aries', 'Leo', 'Sagittarius'],
    traits: ['Passionate', 'Strong Emotions', 'Tempuramental', 'Energetic', 'Accomplished', 'Interesting']
  })
})

router.get('/aries', (req, res) => {
  res.render('fire/aries', { sign: 'aries' })
})

router.get('/leo', (req, res) => {
  res.render('fire/leo', { sign: 'leo' })
})

router.get('/sagittarius', (req, res) => {
  res.render('fire/sagittarius', { sign: 'sagittarius' })
})


module.exports = router