import { defineController } from "epii-tiny-app";
import fs from "fs";
export default defineController({
    index(ctx) {
        ctx.html(fs.readFileSync(__dirname+"/../web/index.html").toString());
    }
});