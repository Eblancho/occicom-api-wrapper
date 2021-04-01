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
}

module.exports = AppData;