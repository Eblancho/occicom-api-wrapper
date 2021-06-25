const OccicomAPI = require("../");

const API = new OccicomAPI("v1");

API.login("blanchonenzo@gmail.com", "", "").then((a) => {
    
    API.CallForwards.getCallForwards("8933524573801").then((a) => {
        console.log("ok:",a);
    }).catch((a) => {
        console.log("nok", a);
    })
    /*
    API.CallForwards.setCallForwards("8933524573801", true, "0621**7127", false, false, "", false, 0, false, "", false, false, "", false).then((a) => {
        console.log("ok:",a);
    }).catch((a) => {
        console.log("nok", a);
    })*/
}).catch((a) => {
    console.log("nok1:", a);
})