class Voicemail {
    constructor(API) {
        this.API = API;
        this.baseMessages = "voicemail/messages/";
        this.baseGreetings = "voicemail/greetings/";
    }

    getMessages(sipExtension, page, number) {
        return this.API.get(this.baseMessages + sipExtension + "/" + page + "/" + number + "/");
    }

    getMessage(id) {
        return this.API.get(this.baseMessages + id, false, true);
    }

    deleteMessage(id) {
        return this.API.delete(this.baseMessages + id);
    }

    setMessageReaded(id) {
        return this.API.patch(this.baseMessages + id + "/markAsReadVM");
    }

    getGreetings(sipExtension, page, number) {
        return this.API.get(this.baseGreetings + sipExtension + "/" + page + "/" + number + "/");
    }

    getGreeting(id) {
        return this.API.get(this.baseGreetings + id, false, true);
    }

    deleteGreeting(id) {
        return this.API.delete(this.baseGreetings + id);
    }

    uploadGreeting(sipExtension, record_greeting_file, description) {
        let formData = new FormData();
        formData.append("sipExtension", sipExtension);
        formData.append("record_greeting_file", record_greeting_file);
        formData.append("description", description);

        return this.API.postFile(this.baseGreetings + sipExtension + "/uploadRecordGreeting", formData);
    }

    setActiveGreeting(id) {
        return this.API.patch(this.baseGreetings + id + "/activeGreeting", {
            "greetingId ": id
        });
    }


}

module.exports = Voicemail;