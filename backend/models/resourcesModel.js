const mongoose = require('mongoose')

const Schema = mongoose.Schema

const osadnicySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nr: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timeStamps: true
})

module.exports = mongoose.model('Osadnicy', osadnicySchema)