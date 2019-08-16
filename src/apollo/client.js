import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  fetch,
  headers: {
    authorization: `Bearer ${process.env.FAUNA_KEY_SECRET}`
  }
});
