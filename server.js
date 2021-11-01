const express = require('express');
const { showHome, showAllProducts } = require('./helpers/Interface');
const app = express();

app.set('view engine', 'html')
    .use(express.urlencoded())
    .use(express.json())
    .route('/')
    .get(showHome)

app.set('view engine', 'html')
    .use(express.urlencoded())
    .use(express.json())
    .route('/all-items')
    .get(showAllProducts)

app.set('view engine', 'html')
    .use(express.urlencoded())
    .use(express.json())
    .route('/add-item')
    .get(showHome)

app.set('view engine', 'html')
    .use(express.urlencoded())
    .use(express.json())
    .route('/update-item')
    .get(showHome)


app.listen(4401, function(){
    console.log('Api start')
})
