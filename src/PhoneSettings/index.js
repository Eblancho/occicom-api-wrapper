class PhoneSettings {
    constructor(API) {
        this.API = API;
    }

    getSIPAccounts(user_id) {
        return new Promise(async (resolve, reject) => {
            this.API.get("phoneSettings/provisioning/" + user_id).then((response) => {
                const user_info = response.data.header.user;

                resolve({
                    user: response.data.header.user,
                    SIPAccounts: response.data.SIPAccounts,
                    SIPTransport: response.data.SIPTransport,
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
                const user_info = response.data.header.user;

                resolve({
                    user: response.data.header.user,
                    callerNumbers: response.data.callerNumbers,
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