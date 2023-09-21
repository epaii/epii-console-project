

import {consoleInit} from "../src/index";

consoleInit(7799);

setInterval(()=>{
    console.log({
        d:Math.random()+"ddddd"
    },"testst");
},3000)


setInterval(()=>{
    console.error(new Error(Math.random()+"dddddd"),"testst");
},3000)