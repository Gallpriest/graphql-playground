import { gql } from 'apollo-server-express';

export const QueryType = gql`
    type Query {
        me: User!
    }
`;
