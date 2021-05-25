class Users {
    constructor(API) {
        this.API = API;
    }

    getAll(sipExtension, page, number) {
        return this.API.get("users/" + sipExtension + "/" + page + "/" + number + "/");
    }

    setFavorite(sipExtension, favorite) {
        return new Promise(async (resolve, reject) => {
            this.API.post("users/favorites", {
                "sipExtension": sipExtension,
                "favorite" : favorite,
            }).then((response) => {
                resolve({
                    success: true,
                    response: response
                })
            }).catch((error) => {
                reject({
                    success: false,
                    error: error
                });
            })
        })
    }
}

module.exports = Users;