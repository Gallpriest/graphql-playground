import { gql, makeExecutableSchema } from 'apollo-server-express';

import User from './User';
import Query from './Query';
import resolvers from '../resolvers';

const typeDefs = [User, Query];

export default makeExecutableSchema({
    typeDefs: [User, Query],
    resolvers: [resolvers],
});