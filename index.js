const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)


app.get('/',(req,res)=>{
    // res.send('hey im here')
    res.render('index.ejs')
})
app.get('/water',(req,res)=>{
    const waterSigns = ['Pisces','Cancer','Scorpio']
    const waterTraits = ['private','mysterious','psychic','charming','emoitional','sensitive']
    res.render('water.ejs', {waterSigns,waterTraits})
})
app.get('/air',(req,res)=>{
    const airSigns = ['Aquarius','Gemini','Libra']
    const airTraits = ['movement','creativity','action','adventure','exciting','easily provoked']
    res.render('air.ejs',{airTraits,airSigns})
})
app.get('/fire',(req,res)=>{
    const fireSigns = ['Aires','Leo','Sagittarius']
    const fireTraits = ['passionate','strong emotions','temperamental','energetic','interesting']
    res.render('fire.ejs',{fireSigns, fireTraits})
})
app.get('/earth',(req,res)=>{
    const earthSigns = ['Taurus','Virgo','Capricorn']
    const earthTraits = ['grounded','helpful','practical','realistic','materialistic','dependable']
    res.render('earth.ejs',{earthSigns,earthTraits})
})



app.listen(8000,()=>{
    console.log('go baby go')
})

// <!-- <ul>
//     <% Object.values(airObj).forEach(val=>{ %>
//         <li> <%=val%> </li>
//     <% }) %>
// </ul> -->
