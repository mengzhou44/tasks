import { ApolloServer } from 'apollo-server-express'
import { IResolvers } from '@graphql-tools/utils'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'

// Import modules
import  {UserGraphQLModule} from './modules/user/user.graphql'


// Function to create Apollo Server
export function createApolloServer(): ApolloServer {
  // Merge type definitions and resolvers
  const typeDefs = mergeTypeDefs([UserGraphQLModule.typeDefs])
  const resolvers: IResolvers = mergeResolvers([UserGraphQLModule.resolvers])

  // Create Apollo Server instance
  const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }): { token: string | null } => {
      const token: string | null =
        req.headers.authorization?.split(' ')[1] || null
      return { token }
    },
  })

  return server
}
