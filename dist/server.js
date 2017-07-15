"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const server = express();
const port = process.env.PORT || 3000;
const schema = {};
server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
