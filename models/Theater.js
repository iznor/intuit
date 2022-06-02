const { Schema, model, Mongoose, SchemaTypes } = require('mongoose');

const movieSchema = new Schema({
    id: String,
    name : String

})

const theaterSchema = new Schema({
    id: String,
    screenings : [{movieSchema},String]

}, { collection: 'theaters' });

const Theater = model('Theater', theaterSchema);

module.exports = Theater;

