import { DocumentNode } from 'graphql'
import { IResolvers } from '@graphql-tools/utils'

export type SchemaModule = {
  typeDefs: DocumentNode | string
  resolvers: IResolvers
}