class Users {
    constructor(API) {
        this.API = API;
    }

    getAll(sipExtension, page, number) {
        return this.API.get("users/" + sipExtension + "/" + page + "/" + number + "/");
    }
}

module.exports = Users;