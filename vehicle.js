const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema cliente
const vehicleShema = new Schema({
    license_plate: String,
    capacity: String,
    idBrand: String,
    idStyle: String,
    model: String,
    color: String,
    displacement: String,
    fuel: String,
    transmission: String,
    year: String,
    passengers: String,
    price: Number,
    state: String,
});

module.exports = mongoose.model('vehicle',vehicleShema);