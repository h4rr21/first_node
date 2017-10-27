const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
let models = require('./db/models')

const schemaDef = `
    type Beer {
        id : ID!
        name  : String!
        alcohol : Float!
        type : Int!
        brand : Int!
        description : String!
        volume : Float!
        price : Float!
    }

    input NewBeer {
        name  : String!
        alcohol : Float!
        type : Int!
        brand : Int!
        description : String!
        volume : Float!
        price : Float!
    }

    input UpdateBeer {
        id: ID!
        name  : String
        alcohol : Float
        type : Int
        brand : Int
        description : String
        volume : Float
        price : Float
    }

    type Query {
        cervezas : [Beer]
        cerveza(id: Int) : Beer
    }

    type Mutation{
        addBeer(beer: NewBeer): Beer
        updateBeer(beer: UpdateBeer): Beer
        deleteBeer(id: Int): Beer
    }
`

const resolversitos = {
    Query:{
        cervezas : () => {
            return models.Beer.findAll()
        },
            // return [
            //     {
            //         id : 1,
            //         name  : "Minerva Pale Ale",
            //         alcohol : 34.5,
            //         type : 4,
            //         brand : 6,
            //         description : "chida la ale",
            //         volume : 52.2,
            //         price : 56.2
            //     },
            //     {
            //         id : 2,
            //         name  : "Minerva Stout",
            //         alcohol : 6.5,
            //         type : 7,
            //         brand : 6,
            //         description : "chida la stout",
            //         volume : 52.2,
            //         price : 57.2
            //     }
            // ]
        cerveza : (_, args) => {
                return models.Beer.findOne({where: {id: args.id}})
        },
        // cerveza : (_, args) => {
        //         models.Beer.findById((args.id)=>{
        //             return
        //         })
        // }
    },

    Mutation: {
        addBeer: (_, args) =>{
            return models.Beer.create(args.beer)
        },

        updateBeer: (_,args) =>{
            models.Beer.update(args.beer, {where: {id: args.beer.id}})  
            return   models.Beer.findOne({where: {id: args.beer.id}})
        },

        deleteBeer: (_,args) =>{
            let deleted_beer = models.Beer.findOne({where: {id: args.id}})
            models.Beer.destroy({where: {id:args.id }})
            return deleted_beer
        }

    }
};



const schema = makeExecutableSchema ({
    "typeDefs" : schemaDef,
    "resolvers" : resolversitos
})

module.exports = schema;
