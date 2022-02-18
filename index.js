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

    res.render('water.ejs', {
        element: 'Water',
        signs: ['Pisces','Cancer','Scorpio'],
        traits: ['private','mysterious','psychic','charming','emoitional','sensitive']
    })
})
app.get('/air',(req,res)=>{
    
    res.render('air.ejs',{
        element: 'Air',
        signs: ['Aquarius','Gemini','Libra'],
        traits: ['movement','creativity','action','adventure','exciting','easily provoked']
    })
})
app.get('/fire',(req,res)=>{

    res.render('fire.ejs',{
        element: 'Fire',
        signs: ['Aires','Leo','Sagittarius'],
        traits: ['passionate','strong emotions','temperamental','energetic','interesting']
    })
})

app.get('/earth',(req,res)=>{

    res.render('earth.ejs',{
        element: 'Earth',
        signs: ['Taurus','Virgo','Capricorn'],
        traits: ['grounded','helpful','practical','realistic','materialistic','dependable']
    })
})



app.listen(8000,()=>{
    console.log('go baby go')
})

// <!-- <ul>
//     <% Object.values(airObj).forEach(val=>{ %>
//         <li> <%=val%> </li>
//     <% }) %>
// </ul> -->
