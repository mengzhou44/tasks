import { gql } from 'apollo-server-express'
import { IResolvers } from '@graphql-tools/utils' 
import { SchemaModule } from '../types'
import  taskService from './task.service'
import { AddTaskInput, Task } from './task.model'
import { GraphQLDateTime } from 'graphql-scalars'


export const TaskSchemaModule: SchemaModule = {
  typeDefs: gql`
    scalar DateTime
    type Task {
      id: ID!
      name: String!
      createdBy: String!
      createdOn: DateTime!
    }
    input AddTaskInput {
      name: String!
      createdBy: String!
    }

    type Query {
      tasks: [Task!]!
    }

    type Mutation {
      addTask(input: AddTaskInput!): String!
    }

  `,
  resolvers: <IResolvers>{
    DateTime: GraphQLDateTime,
    Query: {
      tasks: (): Task[] => taskService.getTasks()
    },
    Mutation: {
      addTask: async (_parent: any, args: { input: AddTaskInput }): Promise<String> => {
          return await taskService.addTask(args.input)
       },
    }
  },
}
