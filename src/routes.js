const express = require ('express')
const routes = express.Router ()
const home = require ('./app/controllers/homeController')

routes
.get ('/', home.all)

module.exports = routes