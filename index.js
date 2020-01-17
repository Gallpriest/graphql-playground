import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import { schema } from './shema';

const app = express();
const server = new ApolloServer({ schema });

server.applyMiddleware({app, path: '/graphql'});

app.use(cors());
app.listen({ port: 5050 }, () => console.log('Server is started on http://localhost:5050/graphql'))