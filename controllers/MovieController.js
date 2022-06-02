const Movie = require('../models/Movie');

exports.MovieController = {
    async getMovieByTheaterDate(req, res) {
        Movie.find({"screenings.movie" : req.movieId})
            .then(docs => {res.json(docs)})
            .catch(err => console.log(err));
    }
};
