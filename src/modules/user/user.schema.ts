import { gql } from 'apollo-server-express'
import { IResolvers } from '@graphql-tools/utils' 
import { SchemaModule } from '../types'
import userService from './user.service'
import { User } from './user.model'


export const UserSchemaModule: SchemaModule = {
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
