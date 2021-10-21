const {RESTDataSource} = require('apollo-datasource-rest');

const serverConfig = require('../server');

class ProjectInvAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.projectInv_api_url;
    }

    async userByUserId(userId){
        return await this.get(`/participantes/${userId}`);
    }

    async createProject(project) {
        project = new Object(JSON.parse(JSON.stringify(project)));
        return await this.post('proyecto', project);
    }

    async projectByIdUser(userId){
        return await this.get(`/proyectos/${userId}`);
    }
}

module.exports = ProjectInvAPI;