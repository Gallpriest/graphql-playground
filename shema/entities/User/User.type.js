import { gql } from 'apollo-server-express';

export const UserType = gql`
    type User {
        username: String!
        age: Int!
        hobby: String!
    }
`;
