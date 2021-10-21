const { gql } = require('apollo-server');

const projectTypeDefs = gql `
    type Project {
        projectId: String!
        nombre: String
        estado: String
        userId: String
        fechaInicio: String
        fechaFin: String
    }
    input ProjectInput {
        userId: String
        nombre: String
        estado: String
    }
    extend type Query {
        projectByIdUser(userId: String!): [Project]
    }

    type Mutation {
        createProject(project: ProjectInput!): Project
    }
`;

module.exports = projectTypeDefs;