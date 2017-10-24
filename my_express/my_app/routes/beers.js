let express = require('express');
let router = express.Router();
let models = require('../db/models');

router.get("/",(req, rest, next) => {
    models.Beer.findAll().then (( )=> {
        res.send(beers)
    })
});