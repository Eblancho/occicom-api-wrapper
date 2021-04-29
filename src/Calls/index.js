class Calls {
    constructor(API) {
        this.API = API;
    }

    getCallLog(sipExtension, type, pageNumber, numberPerPage) {
        return this.API.get("calls/" + sipExtension + "/" + type + "/" + pageNumber + "/" + numberPerPage + "/");
    }

    makeCall(sipExtension, calledNum) {
        return new Promise(async (resolve, reject) => {
            this.API.post("calls/" + sipExtension + "/makeCall", {
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