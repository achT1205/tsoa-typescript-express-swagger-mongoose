import express from "express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "../build/routes";
import cors from 'cors';
import * as swaggerUi from 'swagger-ui-express'

export const app = express();

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors())
app.use(bodyParser.json());

RegisterRoutes(app);

try {
  const swaggerDocument = require('../swagger.json')
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
} catch (error) {
  console.error('Unable to reed swagger.json')
}