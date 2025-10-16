import { DocumentNode } from 'graphql'
import { IResolvers } from '@graphql-tools/utils'

export type GraphQLModule = {
  typeDefs: DocumentNode | string
  resolvers: IResolvers
}