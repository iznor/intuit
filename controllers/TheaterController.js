const Theater = require('../models/Theater');

exports.TheaterController = {
    async getTheatersByMovieDate(req, res) {
        Theater.find({$and :[{"screenings.movie.id":req.movieId}, {"screenings.date": req.date}]})
            .then(docs => {res.json(docs)})
            .catch(err => console.log(err));
    }
};
