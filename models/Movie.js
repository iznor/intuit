const { Schema, model, Mongoose, SchemaTypes } = require('mongoose');

const movieSchema = new Schema({
    id: String,
    name : String

}, { collection: 'movies' });

const Movie = model('Movie', movieSchema);

module.exports = Movie;

