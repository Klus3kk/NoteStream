const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

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
  tracks: () => {
    return [{ id: 1, name: 'Track 1', artist: 'Artist 1', url: '/track1.mp3', lyrics: 'Lyrics' }];
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
