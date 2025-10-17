import { ApolloServer } from 'apollo-server-express'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { UserSchemaModule } from './modules/user/user.schema'
import { TaskSchemaModule } from './modules/task/task.schema'


export function createApolloServer(): ApolloServer {
  
  const modules = [UserSchemaModule, TaskSchemaModule]

  const typeDefs = mergeTypeDefs(modules.map(m => m.typeDefs))
  const resolvers = mergeResolvers(modules.map(m => m.resolvers))


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
