# Occicom API Wrapper

## A JS wrapper for Occicom API

## Installation
```bash
$ npm install --save occicom-api-wrapper
```

## Initialisation
```js
const OccicomAPI = require("occicom-api-wrapper");

const API = new OccicomAPI("v1");

API.login("e@mail.com", "OTP").then((loginResponse) => {
    API.Dashboard.dashboard("SIP").then((dashboardResponse) => {
        console.log(dashboardResponse);
    }).catch((dashboardError) => {
        console.error(dashboardError);
    })
}).catch((loginError) => {
    console.error(loginError);
})
```

### Currently Supports
- [ ] Status (the api does not work anyway)
- [ ] Menu items (only returns information from the swagger, so useless for the moment)
- [x] Dashboard
- [ ] Calls get the list of call log
- [x] Calls Initiates a new call (makeCall)
- [ ] Voicemail get the list of voice mail
- [ ] Voicemail get a voice mail
- [ ] Voicemail erase a voice mail
- [ ] Voicemail mark a voice mail as read by the end user
- [ ] Voicemail get the personal greeting for the voicemail
- [ ] Voicemail get a greeting file
- [ ] Voicemail erase a greeting records
- [ ] Voicemail upload record greeting file
- [ ] Voicemail active greeting records
- [ ] Call forward get the list of call forward settings
- [ ] Call forward defines an extension call forward settings
- [ ] Dial groups get the list of all dial groups and members
- [ ] Dial groups get members of the group
- [ ] Dial groups update members of the group
- [ ] IVR get the greeting settings (if applicable for the company)
- [ ] IVR update the greeting settings (if applicable for the company)
- [ ] IVR get the mode settings of the company
- [ ] IVR update the mode settings of the company
- [ ] IVR get the Holidays
- [ ] IVR add a new holiday
- [ ] IVR deletes an existing holiday
- [x] Phone settings get the list of available SIP accounts for the softphone (getSIPAccounts)
- [x] Phone settings get the list of available did numbers for the SIP account (getDIDNumbers)
- [x] Application Data Authentication (auth)
- [x] Application Data Send OTP (sendOTP)
- [ ] Application Data Logout
- [x] Application Data Lost password (sendLostPassword)
- [ ] Application Data get the list of application specific data
- [ ] Application Data set User Pic
- [ ] Application Data checkVersion
- [ ] Application Data get the list of languages
- [ ] Application Data modifiy the language of application
- [ ] Directory get the list of contacts
- [ ] Directory add new contact in one of the company or user directories
- [ ] Directory modify a contact in one of the company or user directories
- [ ] Directory deletes a contact from a directory
- [ ] Directory upload all mobile contacts to the server. (All contacts previously exported to the server will be removed first)
- [ ] Users get the list of other company users
- [ ] Users get the list of favorite users
- [ ] Users update favorite users list

### Authors

* **[Eblancho (Me)](https://github.com/Eblancho)**

### Documentation
