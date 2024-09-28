const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const schema = buildSchema(`
  type Query {
    tracks: [Track]
  }
  type Track {
    id: ID!
    name: String
    artist: String
    url: String
    lyrics: String
  }
`);

const root = {
  tracks: async () => {
    return await prisma.track.findMany();
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to http://localhost:4000/graphql'));
