"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomString(e = 32) {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", a = t.length, n = "";
    for (let i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n;
}
const out = {
    maxSize: 1000,
    lastId: 0,
    logs: [],
    console: {
        log() {
            var _a;
            out.push(arguments[0], "log", (_a = arguments[1]) !== null && _a !== void 0 ? _a : "");
        },
        error() {
            var _a;
            out.push(arguments[0], "error", (_a = arguments[1]) !== null && _a !== void 0 ? _a : "");
        }
    },
    push(msg, level = "log", tag = "") {
        var _a;
        this.lastId = randomString();
        this.logs.unshift({
            id: this.lastId,
            msg: (_a = msg.message) !== null && _a !== void 0 ? _a : msg,
            tag,
            level,
            time: Date.now()
        });
        if (this.logs.length > this.maxSize) {
            this.logs.pop();
        }
    },
    getLogs(lstId = 0) {
        let newlogs = [];
        if (lstId === 0) {
            return Object.values(this.logs);
        }
        if (this.lastId === lstId)
            return newlogs;
        for (let index = 0; index < this.logs.length; index++) {
            const element = this.logs[index];
            if (element.id != lstId) {
                newlogs.push(element);
            }
            else {
                break;
            }
        }
        return newlogs;
    }
};
exports.default = out;
