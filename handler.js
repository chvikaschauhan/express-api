"use strict";
exports.__esModule = true;
var Redis = require('ioredis');
var redis = new Redis();
var handler = {
    Setdata: function (key, value) {
        redis.set(key, value);
    },
    getdata: function (key) {
        var result;
        result = redis.get(key);
        return result;
    }
};
exports["default"] = handler;
