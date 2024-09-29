const cors = require('cors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use(cors());

const tracks = [
  { id: 1, name: 'Song Title', artist: 'Artist Name', url: 'http://localhost:4000/public/audio/song.mp3' }
];

const root = {
  track: ({ id }) => tracks.find(track => track.id === id)
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Now browse to http://localhost:4000/graphql');
});
