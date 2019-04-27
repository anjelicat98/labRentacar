const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema cliente
const clientShema = new Schema({
    id_client: String,
    name: String,
    lname: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('client',clientShema);