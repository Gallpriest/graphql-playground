import { makeExecutableSchema } from 'apollo-server-express';

import { QueryType } from './entities/Query';
import { UserType, UserResolver } from './entities/User';

export const schema = makeExecutableSchema({
    typeDefs: [UserType, QueryType],
    resolvers: [UserResolver],
});