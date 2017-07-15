import * as express from 'express';
import {Application} from 'express';
import * as graphqlHTTP  from 'express-graphql';

const server: Application = express();
const port = process.env.PORT || 3000
const schema = {}

// GraphQL API endpoint
server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

server.listen(port, () => {

  console.log(`Server running on port ${port}`);

});