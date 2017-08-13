'use strict';
var azure = require("azure");
var config = require("../config");
class MessageListener {
    constructor() {
        this.serviceBus = azure.createServiceBusService(config.azure.serviceBus.connectionString);
        this.listen = this.listen.bind(this);
    }
    listen() {
        this.serviceBus.receiveQueueMessage(config.azure.serviceBus.queueName, (error, receivedMessage) => {
            var _listen = this.listen;
            if (!error) {
                console.log(receivedMessage);
                
                setTimeout(_listen, config.azure.serviceBus.delay);
            }
            else
                setTimeout(_listen, config.azure.serviceBus.delay);
        });
    }
}

module.exports = new MessageListener();