declare const html = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\"content=\"width=device-width, initial-scale=1.0\"><title>\u63A7\u5236\u53F0</title></head><style scoped>html,body{margin:0;padding:0;width:100%;background-color:#0d1117}.msg-title{font-size:25px;text-align:center;padding:0px 0px 0px;color:#fff}.scrollbar{display:flex;justify-content:center}.scroll-fix button{outline:none;border:1px solid#dddddd;color:#fff;background:transparent;width:80px;height:35px;border-radius:3px;margin-bottom:10px;cursor:pointer}.scroll-fix button:hover{background-color:#313131;cursor:pointer}</style><body><p class=\"msg-title\"id=\"msgTitle\">F12\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u65E5\u5FD7</p><div class=\"scrollbar\"><div class=\"scroll-fix\"><button onclick=\"doStop(this)\">\u6682\u505C</button><br/><button onclick=\"doClear(false)\"ondblclick=\"doClear(true)\">\u6E05\u7A7A</button></div></div><script>window.EpiiConsoleConfig={api:\"console?app=receive&\",clearApi:\"console?app=clear\"};window.EpiiConsole=(function(){let config={apiBase:\"../\",interval:1000};let receiveHanlder=[];const out={enable:true,lastId:\"-1\",ajax:{async getText(uri){return(await fetch(config.apiBase+uri,{mode:'cors',})).text()},async get(uri){return(await fetch(config.apiBase+uri,{mode:'cors',})).json()},async post(uri,data={}){return(await fetch(config.apiBase+uri,{method:'post',body:JSON.stringify(data),headers:{'Content-Type':'application/json'}})).json()}},api:{async get(uri){let ret=await out.ajax.get(uri);if(ret.code-1===0){return ret.data}else{throw new Error(ret.msg);}}},sleep(time){return new Promise(r=>setTimeout(r,time))},setConfig(c){Object.assign(config,c);return this},onReceive(handler){receiveHanlder.push(handler);return this},async callReceiveHandler(element){for(let j=0;j<receiveHanlder.length;j++){await receiveHanlder[j](element)}},async __notice(ret){if(ret.lastId!=this.lastId){this.lastId=ret.lastId;if(receiveHanlder.length>0){for(let index=ret.logs.length-1;index>=0;index--){const element=ret.logs[index];await this.callReceiveHandler(element)}}}},async start(){do{if(receiveHanlder.length>0){break}await this.sleep(100)}while(true);await this.__notice(await this.api.get(window.EpiiConsoleConfig.api));do{if(this.enable){try{await this.__notice(await this.api.get(window.EpiiConsoleConfig.api+\"&lastId=\"+this.lastId))}catch(error){await this.callReceiveHandler({msg:\"\u94FE\u63A5Rpa\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u67E5\u770BRpa\u7A0B\u5E8F\u662F\u5426\u6B63\u5E38\u8FD0\u884C\uFF0C10\u79D2\u540E\u81EA\u52A8\u91CD\u8BD5\",color:\"red\",time:Date.now()});await this.sleep(10000)}}await this.sleep(config.interval)}while(true)},async clear(){await this.api.get(window.EpiiConsoleConfig.clearApi)},stop(){this.enable=!this.enable}};return out})();async function start(){window.EpiiConsole.onReceive(function(message){try{let _time=new Date(message.time).toLocaleString();console[message.level](message.msg,message.tag,_time)}catch(error){console.log(error)}}).start()}function doClear(serverClearr){console.clear();if(serverClearr){if(window.confirm(\"\u786E\u5B9A\u8981\u6E05\u9664\u670D\u52A1\u65E5\u5FD7\u5417\")){window.EpiiConsole.clear()}}}function doStop(button){window.EpiiConsole.stop();if(button.innerText===\"\u6682\u505C\"){button.innerText=\"\u7EE7\u7EED\"}else{button.innerText=\"\u6682\u505C\"}}start();</script></body></html>";
export default html;