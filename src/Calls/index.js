class Calls {
    constructor(API) {
        this.API = API;
    }

    makeCall(sipExtension, calledNum) {
        return new Promise(async (resolve, reject) => {
            this.API.post("appData/user/auth", {
                "sipExtension": sipExtension,
                "calledNum" : calledNum,
            }).then((response) => {
                resolve({
                    success: true
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

module.exports = Calls;