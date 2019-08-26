import React from 'react'
// import { graphql } from 'gatsby'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Todos from '../components/todos'

// This query is executed at build time by Gatsby.
const APOLLO_QUERY = gql`
	query {
		allTodos {
			title
			completed
		}
	}
`

export default () => (
	<Layout>
		<SEO title="Home" />
		<h1>Todos</h1>

		<Query query={APOLLO_QUERY}>
			{({ data, loading, error }) => {
				if (loading) return <p>Loading...</p>
				if (error) return <p>Error: {error.message}</p>

				return <Todos todos={data.allTodos} />
			}}
		</Query>
	</Layout>
)
