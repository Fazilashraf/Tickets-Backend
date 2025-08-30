const movies = require('../Models/movieSchema')

exports.addMovieAPI = async (req, res) => {
    console.log("Inside Add Movie API");

    const { name, duration, genre, trailer, movImg, date, bookedCount, rating, votes, bannerImg, movPics, reviews, cast, screen, language, description, movieDate, movieTime, theatreName, ticketPrice } = req.body

    try {
        const movie = await movies.findOne({ name })
        if (movie) {
            res.status(401).json("Movie Already Exist")
        }
        else {
            const newMovie = new movies({ name, duration, genre, trailer, movImg, date, bookedCount, rating, votes, bannerImg, movPics, reviews, cast, screen, language, description, movieDate, movieTime, theatreName, ticketPrice })
            await newMovie.save()
            res.status(200).json(newMovie)
        }
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.getMoviesAPI = async (req, res) => {
    try {
        const response = await movies.find()
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.getAMovieAPI = async (req, res) => {
    const { id } = req.params
    try {
        const response = await movies.findById(id)
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.getHomeMovieAPI = async (req, res) => {
    try {
        const response = await movies.find().limit(3);
        res.status(200).json(response);
    } catch (err) {
        res.status(406).json(err);
    }
};


exports.addReviewAPI = async (req, res) => {

    const { id } = req.params
    const { username, rating, comment } = req.body

    try {
        const movie = await movies.findById(id)
        if (!movie) {
            return res.status(406).json({ message: "Movie not found" })
        }

        movie.reviews.push({ username, rating, comment })
        await movie.save()

        res.status(200).json(movie.reviews)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.editMovieAPI = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        duration,
        genre,
        trailer,
        movImg,
        date,
        bookedCount,
        rating,
        votes,
        bannerImg,
        movPics,
        reviews,
        cast,
        screen,
        language,
        description,
        movieDate,
        movieTime,
        theatreName,
        ticketPrice
    } = req.body;

    try {
        const updatedMovie = await movies.findByIdAndUpdate(
            id,
            {
                name,
                duration,
                genre,
                trailer,
                movImg,
                date,
                bookedCount,
                rating,
                votes,
                bannerImg,
                movPics,
                reviews,
                cast,
                screen,
                language,
                description,
                movieDate,
                movieTime,
                theatreName,
                ticketPrice
            },
            { new: true }
        );

        if (!updatedMovie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        res.status(200).json(updatedMovie);
    } catch (err) {
        res.status(406).json(err);
    }
};

exports.DeleteMovieAPI = async (req, res) => {
    const { id } = req.params

    try {
        const deletedMovie = await movies.findByIdAndDelete(id)

        if (!deletedMovie) {
            res.status(404).json({ message: 'Movie not Found' })
        }
        else {
            res.status(200).json({ message: 'Movie Deleted Successfully' })
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error Deleting Movie', error: err })
    }
}

exports.getAllReviewsAPI = async (req, res) => {
    try {
        const reviews = await movies.find({}, { reviews: 1, name: 1 });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch reviews", error: err });
    }
};

exports.deleteReviewAPI = async (req, res) => {
  const { movieId, reviewId } = req.params;

  try {
    const movie = await movies.findById(movieId);
    if (!movie) return res.status(404).json("Movie not found");

    movie.reviews = movie.reviews.filter(review => review._id.toString() !== reviewId);
    await movie.save();

    res.status(200).json("Review deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};
