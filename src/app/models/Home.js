const db = require ('../../config/db')

module.exports = {
    async allMovies ( data ) {
        const movies = await db.query (`
            SELECT * FROM movies   
        `)
        
        return movies 
    }
}