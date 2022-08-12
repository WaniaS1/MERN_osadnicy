const express = require('express')
const dataRoutes = require('./routes/dataRoutes')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())


app.use('/api/data', dataRoutes)

mongoose.connect('mongodb://localhost:27017')
    .then(data => {
        app.listen(4000, () => {
            console.log('connected to db & listening on Port 4000')
        })
    }).catch(err => {console.log('ajajaj', err)})


