const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'))
})

app.get('/luiz', (req, res) => {
    res.sendFile(path.join(__dirname + '/luiz.html'))
})

app.listen(3000)