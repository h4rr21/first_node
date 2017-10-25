let express = require('express');
let router = express.Router();
let models = require('../db/models');
let strongParams = require('strong-params');
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
router.use(strongParams.expressMiddleware())

router.get('/',(req, res, next) => {
    models.Beer.findAll().then ((beer)=> {
        res.send({beer:beer})
    })
});

router.post('/', (req, res, next) => {
    let params = req.parameters;
    let beerParams = params.require('beer').permit('name','alcohol','type','brand','description','volume','price').value();
    models.Beer.create(beerParams).then((beer)=>{
        res.status(201).send({beer:beer})
    }).catch((err)=> {
        res.status(400).send({error:error.message})
    } )
});

router.put('/:id', (req, res, next)=> {
    let params = req.parameters;
    let beerParams = params.require('beer').permit('name','alcohol','type','brand','description','volume','price').value();
    let beerId = req.params.id;
    let beerQuery = {
        where : {
            id : beerId
        }
    }
    model.Beer.findOne(beerQuery).then((beer)=>{
        if (!beer){ res.status(404).send({error:'beer with not found'})}
        beer.update(beerParams).then((updatedBeer)=>{
            res.status(202).send({beer:updatedBeer})
        }).catch((err)=>{
            res.status(400).send({error:err.message})
        })
    })

})

router.delete('/:id', (req, res, next)=>{
    let beerId = req.params.id;
    let beerQuery = {
        where : {
            id : beerId
        }
    };
    models.beer.destroy(beerQuery).then((removedBeer) => {
        res.status(204).send({beer:removedBeer})
    })
})

module.exports = router