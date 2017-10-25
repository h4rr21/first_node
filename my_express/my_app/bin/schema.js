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

    type Query {
        cervezas : [Beer]
        cerveza(id: Int) : Beer
    }

`

