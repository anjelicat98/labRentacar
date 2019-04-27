const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema cliente
const rentShema = new Schema({
    id_client: String,
    license_plate: String,
    days: Number,
    total_pay: String,
});

module.exports = mongoose.model('rent',rentShema);