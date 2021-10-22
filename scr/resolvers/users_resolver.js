const usersResolver = {
    Query: {
        userByUserId: (_, {userId}, { dataSources}) =>{
            return dataSources.projectInvAPI.userByUserId(userId)
        },

        users: (_, { }, {dataSources}) =>{
            return dataSources.projectInvAPI.users()
        },
    },
    Mutation: {}
};

module.exports = usersResolver;