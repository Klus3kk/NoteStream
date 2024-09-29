const { buildSchema } = require('graphql');

// Define the schema
const schema = buildSchema(`
  type Query {
    track(id: Int!): Track
  }

  type Track {
    id: ID!
    name: String!
    artist: String!
    url: String!
  }
`);

module.exports = schema;
