const express = require('express');
const hbs = require('handlebars');


let app = express();

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.send({
        name : 'Tejas',
        age : 20
    })
})

app.get('/about',(req,res)=>{
    res.render('about.hbs');
    res.send('About Page');
})

app.listen(8888,()=>{
    console.log('Server is up on 8888');
});