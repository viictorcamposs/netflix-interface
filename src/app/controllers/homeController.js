const Movies = require ('../models/Home') 

module.exports = {
    async all ( req, res ) {
        let movies = await Movies.allMovies ()
        const movieList = movies.rows
        
        return res.render ('account/home.njk', { movieList })
    }
}