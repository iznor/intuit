const { Router } = require('express');
const { TicketController } = require('../controllers/TicketController');
const ticketRouter = new Router();


ticketRouter.get('/:ticketId', TicketController.getTickets); //res => 
ticketRouter.post('/', TicketController.postTickets); //body: {movieID, paymentMethod}

module.exports = { ticketRouter };