
import App from "epii-tiny-app";

import Log from "./logs";
import indexApi from "./api/index"

let isInit: boolean = false;




export function consoleInitWithApp(app: App, maxSize: number = 1000) {
    if (!isInit) {
        Log.maxSize = maxSize;
        console.log = Log.console.log;
        console.error = Log.console.error;
        app.module("console", indexApi);
        isInit = true;
    }
}

export function consoleInit(port: number = 7788, maxSize: number = 1000) {
    if (!isInit) {
        App.createServer().init((app: App) => {
            consoleInitWithApp(app, maxSize);
        }).listen(port);
    }
}