const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 8888;

let app = express();

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.send({
        name : 'Tejas',
        age : 20
    })
})

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        currentYear : new Date().getFullYear(),
        pageTittle : 'About Page'
    });
})

app.listen(port,()=>{
    console.log(`Server is up on ${port}`);
});