const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to mlab database
mongoose.connect('mongodb://test123:test123@ds119523.mlab.com:19523/graphql-tutorial');
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const port = 8080;
app.listen(port, () => {
    console.log(`Now listening for requests on port ${port}`)
});