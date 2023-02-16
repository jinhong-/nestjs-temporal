"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkflowClient = exports.assignOnAppShutdownHook = void 0;
const client_1 = require("@temporalio/client");
function assignOnAppShutdownHook(client) {
    client.onApplicationShutdown = client.connection.close;
    return client;
}
exports.assignOnAppShutdownHook = assignOnAppShutdownHook;
function getWorkflowClient(options) {
    const client = new client_1.WorkflowClient(options);
    return assignOnAppShutdownHook(client);
}
exports.getWorkflowClient = getWorkflowClient;
