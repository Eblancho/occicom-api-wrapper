class Dashboard {
    constructor(API) {
        this.API = API;
    }

    dashboard(sipExtension) {
        return this.API.get("dashboard/" + sipExtension);
    }
}

module.exports = Dashboard;