import 'reflect-metadata'
import express, {Application,  Request, Response } from 'express'
import cors from 'cors'
import http, { Server } from 'http'
import {startApolloServer } from './apollo-server'

async function main(): Promise<void> {
  const app: Application = express() 

  app.use(express.json())
  app.use(cors())
 
  app.get('/health', (_req: Request, res: Response) => res.send('OK'))

 
  const httpServer: Server = http.createServer(app)
  const apolloServer = await startApolloServer(app)

  httpServer.listen({ port: 4000 }, () => {
    console.log(
      `🚀 Tasks server ready at http://localhost:4000${apolloServer.graphqlPath}`
    )
  })
}

// Start the app
main().catch((err: unknown) => {
  console.error('Error starting server:', err)
})
