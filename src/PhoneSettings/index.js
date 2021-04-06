class PhoneSettings {
    constructor(API) {
        this.API = API;
    }

    getSIPAccounts(user_id) {
        return new Promise(async (resolve, reject) => {
            this.API.get("phoneSettings/provisioning/" + user_id).then((response) => {
                resolve({
                    user: response.header.user,
                    SIPAccounts: response.SIPAccounts,
                    SIPTransport: response.SIPTransport,
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

    getDIDNumbers(user_id) {
        return new Promise(async (resolve, reject) => {
            this.API.get("phoneSettings/callerNumbers/" + user_id).then((response) => {
                resolve({
                    user: response.header.user,
                    callerNumbers: response.callerNumbers,
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

module.exports = PhoneSettings;