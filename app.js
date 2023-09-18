const express = require('express')
const app = express()
const port = 3000

app.get('/', sendHello)

function sendHello (req, res) {
    res.send('hello')
}

app.listen(port)