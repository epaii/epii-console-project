import { defineController } from "epii-tiny-app";
import fs from "fs";
import Log from "./../logs";
const html = fs.readFileSync(__dirname + "/../web/index.html").toString();
let numLimit = 20;
export default defineController({
  index(ctx) {
    numLimit = ctx.params("limit", numLimit);
    ctx.html(html);
  },
  receive(ctx) {
    let lstId = ctx.params("lastId", 0);

    let list = Log.getLogs(lstId);
    if (list.length > numLimit) {
      list = list.splice(0, numLimit);
    }
    return {
      logs: list,
      lastId: list.length > 0 ? list[0].id : lstId,
    };
  },
  clear(ctx) {
    Log.logs = [];
    Log.lastId = 0
    return 1;
  },
});
