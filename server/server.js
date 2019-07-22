const express = require('express')
const app = express()
const disney = require('../src/data')
const princessCtrl = require('./princessCtrl')
const PORT = 5001

app.use(express.json())

app.get('/api/princess', princessCtrl.princesses)
app.put('/api/princess/:id', princessCtrl.updatePrincess)
app.post('/api/princess', princessCtrl.newPrincess)
app.get('/api/princessname', princessCtrl.queryFinder)//called it queryFinder so that it helps me remeber that it is a query
app.delete('/api/princess/:id',princessCtrl.princessDelete)

app.listen(PORT, () => console.log(`${PORT}, is always listening`))