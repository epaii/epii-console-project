"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const epii_tiny_app_1 = require("epii-tiny-app");
const logs_1 = __importDefault(require("./../logs"));
const index_1 = __importDefault(require("../web/index"));
let numLimit = 20;
exports.default = (0, epii_tiny_app_1.defineController)({
    index(ctx) {
        numLimit = ctx.params("limit", numLimit);
        ctx.html(index_1.default);
    },
    receive(ctx) {
        let lstId = ctx.params("lastId", 0);
        let list = logs_1.default.getLogs(lstId);
        if (list.length > numLimit) {
            list = list.splice(0, numLimit);
        }
        return {
            logs: list,
            lastId: list.length > 0 ? list[0].id : lstId,
        };
    },
    clear(ctx) {
        logs_1.default.logs = [];
        logs_1.default.lastId = 0;
        return 1;
    },
});
