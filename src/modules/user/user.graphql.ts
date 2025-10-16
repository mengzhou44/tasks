import { gql } from 'apollo-server-express'
import { IResolvers } from '@graphql-tools/utils'
 
import { GraphQLModule } from '../types'
import userService from './user.service'

// ----- Model -----
export interface User {
  id: string
  name: string
}

 
// ----- GraphQL module -----
export const UserGraphQLModule: GraphQLModule = {
  typeDefs: gql`
    type User {
      id: ID!
      name: String!
    }

    type Query {
      users: [User!]!
    }
  `,
  resolvers: <IResolvers>{
    Query: {
      users: (): User[] => userService.getUsers(),
    },
  },
}
