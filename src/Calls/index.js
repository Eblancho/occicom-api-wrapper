class Calls {
    constructor(API) {
        this.API = API;
    }

    makeCall(sipExtension, calledNum) {
        domain = domain ? domain : "occicom";

        return new Promise(async (resolve, reject) => {
            this.API.post("appData/user/auth", {
                "sipExtension": sipExtension,
                "calledNum" : calledNum,
            }, true).then((response) => {
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