'use strict';
var azure = require("azure");
var config = require("../config");

class MessageSender {
    constructor() {
        this.serviceBus = azure.createServiceBusService(config.azure.serviceBus.connectionString);
    }

    send(message) {
        return new Promise((resolve, reject) => {
            var queueName = config.azure.serviceBus.queueName;
            this.serviceBus.createQueueIfNotExists(queueName, (createError) => {
                if (createError)
                    reject(createError);
                else {
                    this.serviceBus.sendQueueMessage(queueName, message, function (sendError) {
                        if (sendError)
                            reject(sendError);
                        else {
                            resolve(true);
                        }
                    });
                }
            })
        })
    }
}

module.exports = new MessageSender();