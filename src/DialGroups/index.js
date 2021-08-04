class DialGroups {
    constructor(API) {
        this.API = API;
    }

    getAll(sipExtension, page, number) {
        return this.API.get("dialGroups/" + sipExtension + "/all/" + page + "/" + number + "/");
    }

    update(sipExtension, dialGroupId, routingTypeId, shortNum, companyId, priority) {
        return new Promise(async (resolve, reject) => {
            this.API.put("dialGroups", {
                "sipExtension": sipExtension,
                "dialGroupId": dialGroupId,
                "routingTypeId": routingTypeId, // int
                "members": {
                    "shortNum": shortNum,
                    "companyId": companyId,
                    "priority": priority //int
                }
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

module.exports = DialGroups;