"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleInit = void 0;
const epii_tiny_app_1 = __importDefault(require("epii-tiny-app"));
let isInit = false;
let logs = [];
let __maxSize = 1000;
function myConsole() {
    logs.unshift(arguments[0]);
    if (logs.length > __maxSize) {
        logs.pop();
    }
}
function consoleInit(port = 7788, maxSize = 1000) {
    if (!isInit) {
        __maxSize = maxSize;
        // let oldConsole = console.log;
        console.log = myConsole.bind(console);
        epii_tiny_app_1.default.createServer().route("/clear", function (ctx) {
            logs = [];
            return 1;
        }).route("/", function (ctx) {
            ctx.html(JSON.stringify(logs, null, 10));
        }).listen(port);
        isInit = true;
    }
}
exports.consoleInit = consoleInit;
