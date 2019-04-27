const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema cliente
const infoShema = new Schema({
    total:Number,
    max:Number,
    min:Number,
    avg:Number
});

module.exports = mongoose.model('info',infoShema);