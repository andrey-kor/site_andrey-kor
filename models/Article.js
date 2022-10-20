const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    subtitle: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = model('Article', schema)