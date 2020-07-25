 var express = require('express');
 var { graphqlHTTP } = require('express-graphql');
 var { buildSchema, graphql } = require('graphql');
 var orders = require('./src/data/users')
 // Construct a schema, using GraphQL schema language
 var schema = buildSchema(`
 type Query {
   orders : [Order]
 }
 
 
 type Order{
  orderNumber: String
  orderDescription: String
  quantity: Int
  productCode: Int
  productDescription:String
  topping1:String
  topping2:String
  topping3:String
  chefId: String
  indvQuantity:Int
  price:Int
  orderStatus:String
 }
 `);
 

 // Return a list of users.
 var getOrders = function(args) { 
  
     return orders;
   
 }
 // The root provides a resolver function for each API endpoint
 var root = { 
   orders : getOrders
 };
 
 var app = express();
 const port = 8080;
 let orderList = [];
 app.use('/graphql', graphqlHTTP({
   schema: schema,
   extensions({
    result,
  }) {
    console.log(result.data);
    orderList = result.data;
  },
   rootValue: root,
   graphiql: true,
 }));

 app.listen(4000);
 console.log('Running a GraphQL API server at http://localhost:4000/graphql');

app.get('/getOrders', (req, res) => {
    console.log(orderList);
    res.json(orderList);   
});
    
app.listen(port);

