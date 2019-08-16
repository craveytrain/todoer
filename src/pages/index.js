import React from 'react'
// import { graphql } from 'gatsby'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Layout from '../components/layout'
import SEO from '../components/seo'

// This query is executed at build time by Gatsby.
const APOLLO_QUERY = gql `
  query {
    allTodos {
      data {
        title
      }
    }
  }
`

export default () => (
  <Layout>
    <SEO title='Home' />
    <h1>Todos</h1>

     <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading visitor...</p>
          if (error) return <p>Error: ${error.message}</p>

          return data.allTodos.data.map((todo, i) => <p key={i}>{todo.title}</p>)
          // return <p>Welcome {data.person.name}, from {data.person.homeworld.name}</p>
        }}
      </Query>
    </Layout>
)

