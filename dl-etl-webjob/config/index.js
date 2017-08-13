module.exports = {
    azure: {
        serviceBus: {
            connectionString: process.env.AZURE_SERVICEBUS_CONNECTIONSTRING,
            queueName: process.env.QUEUE_NAME,
            delay: parseInt(process.env.AZURE_SERVICEBUS_DELAY, 10)
        }
    }
};