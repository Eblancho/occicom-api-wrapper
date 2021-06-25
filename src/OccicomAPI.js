const API = require('./API/index.js');
const Dashboard = require('./Dashboard/index.js');
const Calls = require('./Calls/index.js');
const CallForwards = require('./CallForwards/index.js');
const Voicemail = require('./Voicemail/index.js');/*
const DialGroups = require('./DialGroups/index.js');
const IVR = require('./IVR/index.js');*/
const PhoneSettings = require('./PhoneSettings/index.js');
const AppData = require('./AppData/index.js');
const Directory = require('./Directory/index.js');
const Users = require('./Users/index.js');

class OccicomAPI {
    constructor(version, token, user_id) {
        this.API = new API("https://extranet.occicom.fr/api/voip/" + (version ? version : "v1") + "/");
        this.API.token = token ? token : null;
        this.API.user_id = user_id ? user_id : null;

        this.Dashboard = new Dashboard(this.API);
        this.Calls = new Calls(this.API);
        this.CallForwards = new CallForwards(this.API);
        this.Voicemail = new Voicemail(this.API);
        /*this.DialGroups = new DialGroups(this.API);
        this.IVR = new IVR(this.API);*/
        this.PhoneSettings = new PhoneSettings(this.API);
        this.AppData = new AppData(this.API);
        this.Directory = new Directory(this.API);
        this.Users = new Users(this.API);
    }

    login(mail, otp, password, domain, language) {
        return new Promise(async (resolve, reject) => {
            otp = otp ? otp : "";
            password = password ? password : "";
            domain = domain ? domain : "occicom";
            language = language ? language : "";
            
            this.AppData.auth(mail, otp, password, domain).then((response) => {
                if (response.success) {
                    this.API.token = response.token;
                    this.API.user_id = response.user_id;
                    resolve({
                        success: true,
                        token: response.token,
                        user_id: response.user_id
                    });
                }
                else {
                    resolve({
                        success: false
                    });
                }
            }).catch((error) => {
                reject({
                    success: false,
                    error: error
                });
            });
        });
    }
}

module.exports = OccicomAPI;