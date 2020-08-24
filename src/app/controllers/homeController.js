const Movies = require ('../models/Home') 

module.exports = {
    async all ( req, res ) {
        let results = await Movies.all ()
        const movies = results.rows
        
        return res.render ('account/home.njk', { movies })
    }
}