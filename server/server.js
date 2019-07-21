const express = require('express')
const app = express()
const disney = require('../src/data')
const princessCtrl = require('./princessCtrl')
const PORT = 5001

app.use(express.json())

app.get('/api/princess', princessCtrl.princesses)

app.listen(PORT, () => console.log(`${PORT}, is always listening`))