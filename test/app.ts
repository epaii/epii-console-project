

import {consoleInit} from "../src/index";

consoleInit(7799);
let index = 0;
setInterval(()=>{
    console.log({
        d:index++
    },"testst");
},3000)


// setInterval(()=>{
//     console.error(new Error(Math.random()+"dddddd"),"testst");
// },3000)