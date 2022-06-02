const Ticket = require('../models/Ticket');
const crypto = require('crypto');

exports.TicketController = {
    async getTickets(req, res) {
        Ticket.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(err));
    },
    async postTickets(req, res) {
        //get params from body request
        const { body } = req;
        const ticketId = crypto.randomUUID();
        const movie = body.movieName;
        const theater = body.theater;
        const date = body.date;
        const newTicket = new Ticket;

        //assign them new Ticket object
        newTicket.movie = theater;
        newTicket.theater = theater;
        newTicket.date = date;
        newTicket.theater = theater;

        const result = newTicket.save();
        if (result) {
            console.log("Successfully posted a new ticket");
            return res.status(200);
        }
        else {
            console.log("Bad post request"); //scurity wise - it is better not to give details about specific err
            return res.status(400);
        }
    }
};
