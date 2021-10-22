const { gql } = require('apollo-server');

const usersTypeDefs = gql `
    type User {
        userId: String!
        rol: String
        estado: String
        edad: Int
    }
    type Query {
        userByUserId(userId: String): User
    }
    extend type Query {
        users: [User]
    }
`;

module.exports = usersTypeDefs;