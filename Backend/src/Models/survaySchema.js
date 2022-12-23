const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SurvaySchema = new Schema({
    q1: String,
    q2: String,
    q3: String,
    q4: String,
})

module.exports = mongoose.model('Survay', SurvaySchema)