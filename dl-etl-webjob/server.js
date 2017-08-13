'use strict';

function server() {
    try {
        var restify = require('restify');
        restify.CORS.ALLOW_HEADERS.push('authorization');

        var server = restify.createServer();

        server.use(restify.queryParser());
        server.use(restify.bodyParser());
        server.use(restify.CORS({
            headers: ['Content-Disposition']
        }));

        require("./routes/default")(server);
        require("./routes/v1")(server);

        return Promise.resolve(server);
    }
    catch (ex) {
        return Promise.reject(ex);
    }
}

module.exports = server;
