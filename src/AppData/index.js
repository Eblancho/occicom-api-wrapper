class AppData {
    constructor(API) {
        this.API = API;
    }

    auth(mail, otp, password, domain, language) {
        return this.API.post("appData/user/auth", {
            "domain": domain,
            "username" : mail,
            "otp" : otp,
            "password" : password,
            "language" : language
        }, true);
    }

    sendOTP(mail, domain) {
        domain = domain ? domain : "occicom";

        return new Promise(async (resolve, reject) => {
            this.API.post("appData/user/auth", {
                "domain": domain,
                "username" : mail,
                "otp" : "",
                "password" : "",
                "language" : ""
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

    sendLostPassword(domain, mail) {
        domain = domain ? domain : "occicom";
        
        return new Promise(async (resolve, reject) => {
            this.API.post("appData/user/lostPassword", {
                "domain": domain,
                "username" : mail,
                "otp" : "",
                "password" : "",
                "language" : ""
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

module.exports = AppData;