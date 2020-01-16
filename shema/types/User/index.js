import { gql } from 'apollo-server-express';

export default gql`
    type User {
        username: String!
        age: Int!
        hobby: String!
    }
`;