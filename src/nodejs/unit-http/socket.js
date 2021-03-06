
/*
 * Copyright (C) NGINX, Inc.
 */

'use strict';

const EventEmitter = require('events');
const util = require('util');
const unit_lib = require('unit-http/build/Release/unit-http.node');

function Socket(options) {
    EventEmitter.call(this);

    if (typeof options === 'number') {
        options = { fd: options };

    } else if (options === undefined) {
        options = {};
    }

    this.readable = options.readable !== false;
    this.writable = options.writable !== false;
}
util.inherits(Socket, EventEmitter);

Socket.prototype.bufferSize = 0;
Socket.prototype.bytesRead = 0;
Socket.prototype.bytesWritten = 0;
Socket.prototype.connecting = false;
Socket.prototype.destroyed = false;
Socket.prototype.localAddress = "";
Socket.prototype.localPort = 0;
Socket.prototype.remoteAddress = "";
Socket.prototype.remoteFamily = "";
Socket.prototype.remotePort = 0;

Socket.prototype.address = function address() {
};

Socket.prototype.connect = function connect(options, callback) {
    if (callback !== null) {
        this.once('connect', cb);
    }

    this.connecting = true;
    this.writable = true;
};

Socket.prototype.address = function address() {
};

Socket.prototype.destroy = function destroy(exception) {
    this.connecting = false;
    this.readable = false;
    this.writable = false;
};

Socket.prototype.end = function end(data, encoding) {
};

Socket.prototype.pause = function pause() {
};

Socket.prototype.ref = function ref() {
};

Socket.prototype.resume = function resume() {
};

Socket.prototype.setEncoding = function setEncoding(encoding) {
};

Socket.prototype.setKeepAlive = function setKeepAlive(enable, initialDelay) {
};

Socket.prototype.setNoDelay = function setNoDelay(noDelay) {
};

Socket.prototype.setTimeout = function setTimeout(msecs, callback) {
    this.timeout = msecs;

    if (callback) {
        this.on('timeout', callback);
    }

    return this;
};

Socket.prototype.unref = function unref() {
};

Socket.prototype.write = function write(data, encoding, callback) {
};


module.exports = {
    Socket
};
