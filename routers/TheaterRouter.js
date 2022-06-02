const { Router } = require('express');
const { TheaterController } = require('../controllers/TheaterController');
const theaterRouter = new Router();


theaterRouter.get('/:movieId/:date', TheaterController.getTheatersByMovieDate); //date input expected: DDMMYYYY

module.exports = { theaterRouter };