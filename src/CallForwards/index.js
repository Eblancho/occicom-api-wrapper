class CallForwards {
    constructor(API) {
        this.API = API;
    }

    getCallForwards(sipExtension) {
        return this.API.get("callForwards/" + sipExtension);
    }

    setCallForwards(
        sipExtension, 
        unconditional, 
        unconditionalNum, 
        unconditionalNumInternal,
        noAnswer,
        noAnswerNum,
        noAnswerNumInternal,
        noAnswerTimer,
        busy,
        busyNum,
        busyNumInternal,
        unavailable,
        unavailableNum,
        unavailableNumInternal
    ) {

        return new Promise(async (resolve, reject) => {
            this.API.put("callForwards", {
                "sipExtension": sipExtension,
                "busyMaxCalls": 0,
                "unconditional": unconditional, // boolean
                "unconditionalNum": unconditionalNum,
                "unconditionalNumInternal": unconditionalNumInternal, // boolean
                "noAnswer": noAnswer, // boolean
                "noAnswerNum": noAnswerNum,
                "noAnswerNumInternal": noAnswerNumInternal, // boolean
                "noAnswerTimer": noAnswerTimer,
                "busy": busy,
                "busyNum": busyNum,
                "busyNumInternal": busyNumInternal,
                "unavailable": unavailable,
                "unavailableNum": unavailableNum,
                "unavailableNumInternal": unavailableNumInternal
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

module.exports = CallForwards;