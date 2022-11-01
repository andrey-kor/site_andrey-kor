const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    subtitle: {type: String, required: true},
    text: {type: String, required: true},
    link: {type: String, required: true},
})

module.exports = model('Article', schema)