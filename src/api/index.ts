import { defineController } from "epii-tiny-app";
import fs from "fs";
import Log from "./../logs";
const html = fs.readFileSync(__dirname + "/../web/index.html").toString();

export default defineController({
  index(ctx) {
    ctx.html(fs.readFileSync(__dirname + "/../web/index.html").toString());
  },
  receive(ctx) {
    let lstId = ctx.params("lastId", 0);
    let list = Log.getLogs(lstId);
    return {
      logs: list,
      lastId: list.length > 0 ? list[0].id : lstId,
    };
  },
  clear() {
    Log.logs = [];
    Log.lastId = 0
    return 1;
  },
});
