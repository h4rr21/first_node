http://localhost:3000/graphiql

**DATA BASE**
docker run --name database -e MYSQL_DATABASE=database_development -e MYSQL_ROOT_PASSWORD=Passw0rd -p 3306:3306 -dt mysql

 **EXAMPLES**

--- ALL BEERS ---
Query ALL:
{
  cervezas{
    id
    name
	}
}


--- ADD BEER ---
mutation {
	addBeer ( 
    beer:{
        name  : "Minerva Pale Ale"
        alcohol : 34.5,
        type : 4
        brand : 6
        description : "cerveza a base de pan"
        volume : 52.2
        price : 56.2
    }) {
	  id
    name
    description
	}
}

----- UPDATE -----
mutation {
	updateBeer ( 
    beer:{
      	id :14
        name  : "Corona"
    }) {
	  id
    name
    description
	}
}

----- DELETE -----

mutation {
	deleteBeer (id :14) {
	  id
    name
    description
	}
}