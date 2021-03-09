const config = require('config')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.listen(config.get('api.porta'), ()=>{console.log('API Produtos está funcionando')})