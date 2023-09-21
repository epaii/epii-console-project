
import App from "epii-tiny-app";


let isInit: boolean = false;

let logs = [];
let __maxSize: number = 1000;
function myConsole() {
    logs.unshift(arguments[0]);
    if (logs.length > __maxSize) {
        logs.pop();
    }
}


export function consoleInitWithApp(app: App, maxSize: number = 1000) {
    if (!isInit) {
        __maxSize = maxSize;
        // let oldConsole = console.log;
       // console.log = myConsole.bind(console);

        app.module("console", __dirname + "/api");

        // .route("/clear", function (ctx) {
        //     logs = [];
        //     return 1;
        // }).route("/", function (ctx) {
        //     ctx.html(JSON.stringify(logs, null, 10));
        // }) 
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