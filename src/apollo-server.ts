import { ApolloServer } from 'apollo-server-express'
import { buildSchema, NonEmptyArray } from 'type-graphql'

import { TaskResolver } from './modules/task/task.resolver'
import { GraphQLDateTime } from 'graphql-scalars'
import { UserResolver } from './modules/user/user.resolver'

type ResolverType = new (...args: any[]) => any

const resolvers = [
  TaskResolver,
  UserResolver
] as NonEmptyArray<ResolverType>

export async function startApolloServer(app: any): Promise<ApolloServer> {

  const server = await createApolloServer()
  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })
  return server
}

async function createApolloServer(): Promise<ApolloServer> {
  const schema = await buildSchema({
    resolvers,
    scalarsMap: [{ type: Date, scalar: GraphQLDateTime }],
    validate: false,
  })

  const server = new ApolloServer({
    schema,
    context: ({ req }): { token: string | null } => {
      const token: string | null =
        req.headers.authorization?.split(' ')[1] || null
      return { token }
    },
  })

  return server

}