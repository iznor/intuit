const { Schema, model, Mongoose, SchemaTypes } = require('mongoose');
const Theater = require("./Theater");
const ticketSchema = new Schema({
    id: String,
    // screening: {Theater} // The purpose is to return Theater.screening object

}, { collection: 'tickets' });

const Ticket = model('Ticket', ticketSchema);

module.exports = Ticket;

