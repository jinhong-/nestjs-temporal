"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAsyncQueueToken = exports.getQueueToken = void 0;
function getQueueToken(name) {
    return name ? `TemporalQueue_${name}` : 'TemporalQueue_default';
}
exports.getQueueToken = getQueueToken;
function getAsyncQueueToken(name) {
    return name ? `TemporalAsyncQueue_${name}` : 'TemporalAsyncQueue_default';
}
exports.getAsyncQueueToken = getAsyncQueueToken;
