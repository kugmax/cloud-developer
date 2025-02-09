import 'source-map-support/register'
import { getAllGroups } from '../../businessLogic/groups';

import * as express from 'express'
import * as awsServerlessExpress from 'aws-serverless-express'

const app = express()

app.get('/groups', async (_req, res) => {
  const groups = await getAllGroups()

  // Return a list of groups
  res.status(200).json({
    items: groups
  })
})

const server = awsServerlessExpress.createServer(app)
// Pass API Gateway events to the Express server
exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }