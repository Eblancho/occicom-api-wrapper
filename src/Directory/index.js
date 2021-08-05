class Directory {
    constructor(API) {
        this.API = API;
    }

    getAll(sipExtension, page, number) {
        return this.API.get("directory/" + sipExtension + "/all/" + page + "/" + number + "/");
    }

    getDirectory(sipExtension, directory, page, number) {
        return this.API.get("directory/" + sipExtension + "/" + directory +"/" + page + "/" + number + "/");
    }
}

module.exports = Directory;