const { Router } = require('express');
const { MovieController } = require('../controllers/MovieController');
const movieRouter = new Router();


movieRouter.get('/:theaterId/:date', MovieController.getMovieByTheaterDate);

module.exports = { movieRouter };