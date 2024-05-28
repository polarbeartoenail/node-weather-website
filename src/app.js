const express = require('express')
const path = require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const publicDirectoryPath = path.join(__dirname,'../public')

const app = express()
const port = 3000

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'WEATHER APP',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about me',
        name: 'amaury'
    })
})

app.get('/weather', (req, res) => {

    if(!req.query.address){
        return res.send({
            error:'no address parameter entered'
        })
    }

    const address = req.query.address

    geocode(address,(err,{latitude,longitude})=>{
        
        forecast(latitude,longitude,(err,{name,temp})=>{
            res.send({
                name: name,
                temperature: temp
            })
        })
        
        
    })

/*     res.send({
        address: req.query.address
    }) */

    

})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'help',
        item: 'please do this'
    })
})
app.listen(port, () => {
    console.log(`Server up on port ${port}`)
})