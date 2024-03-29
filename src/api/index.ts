import { defineController } from "epii-tiny-app";
import Log from "./../logs";
import html from "../web/index";

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
