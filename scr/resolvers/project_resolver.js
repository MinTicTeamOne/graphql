const projectResolver = {
    Query: {
        projectByIdUser: (_, { userId }, {dataSources}) =>{
            return dataSources.projectInvAPI.projectByIdUser(userId)
        },

        projects: (_, { }, {dataSources}) =>{
            return dataSources.projectInvAPI.projects()
        },

        projectById: (_, { projectId }, {dataSources}) =>{
            return dataSources.projectInvAPI.projectById(projectId)
        },

    },
    Mutation: {
        createProject: (_, {project}, {dataSources})=>{
            return dataSources.projectInvAPI.createProject(project)
        }
    }

};

module.exports = projectResolver;