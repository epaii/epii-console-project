"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleInit = exports.consoleInitWithApp = void 0;
const epii_tiny_app_1 = __importDefault(require("epii-tiny-app"));
const logs_1 = __importDefault(require("./logs"));
let isInit = false;
function consoleInitWithApp(app, maxSize = 1000) {
    if (!isInit) {
        logs_1.default.maxSize = maxSize;
        console.log = logs_1.default.console.log;
        console.error = logs_1.default.console.error;
        app.module("console", __dirname + "/api");
        isInit = true;
    }
}
exports.consoleInitWithApp = consoleInitWithApp;
function consoleInit(port = 7788, maxSize = 1000) {
    if (!isInit) {
        epii_tiny_app_1.default.createServer().init((app) => {
            consoleInitWithApp(app, maxSize);
        }).listen(port);
    }
}
exports.consoleInit = consoleInit;
