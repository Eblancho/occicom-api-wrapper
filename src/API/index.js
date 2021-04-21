const axios = require('axios');

class API {
    constructor(baseUrl) {
        this.baseUrl = new URL(baseUrl);
        this.token = null;
        this.user_id = null;
    }

    get(url, noAuth) {
        return new Promise(async (resolve, reject) => {
            let headers = { headers: { 'Authorization': this.token }};
            if (noAuth) {
                headers = null;
            }
    
            else if (this.token == null) {
                reject(new Error("No token"));
            }
    
            axios.get(this.getURL(url), headers).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    post(url, data, noAuth) {
        return new Promise(async (resolve, reject) => {
            let headers = { headers: { 'Authorization': this.token }};
            if (noAuth) {
                headers = null;
            }
            else if (this.token == null) {
                reject(new Error("No token"));
            }
    
            axios.post(this.getURL(url), data, headers).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    postFile(url, data) {
        return new Promise(async (resolve, reject) => {
            let headers = { 
                headers: { 
                    'Authorization': this.token,
                    'Content-Type': 'multipart/form-data'
                }
            };
            
            if (this.token == null) {
                reject(new Error("No token"));
            }
    
            axios.post(this.getURL(url), data, headers).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    patch(url) {
        return new Promise(async (resolve, reject) => {
            let headers = { headers: { 'Authorization': this.token }};
            
            if (this.token == null) {
                reject(new Error("No token"));
            }
    
            axios.patch(this.getURL(url), headers).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    delete(url) {
        return new Promise(async (resolve, reject) => {
            let headers = { headers: { 'Authorization': this.token }};
            
            if (this.token == null) {
                reject(new Error("No token"));
            }
    
            axios.delete(this.getURL(url), headers).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    getURL(url) {
        return new URL(url, this.baseUrl).toString();
    }
}

module.exports = API;