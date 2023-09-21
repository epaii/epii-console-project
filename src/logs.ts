function randomString(e: number = 32): string {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}


const out = {
    maxSize: 1000,
    lastId: 0,
    logs: [],
    console: {
        log() {
            out.push(arguments[0],"log",arguments[1]??"")
        },
        error() {
            out.push(arguments[0],"error",arguments[1]??"")

        }
    },
    push(msg: string |any, level: "log" | "error" = "log", tag = "") {
        this.lastId = randomString()
        this.logs.unshift({
            id: this.lastId,
            msg:msg.message??msg,
            tag,
            level,
            time: Date.now()
        });
        if (this.logs.length > this.maxSize) {
            this.logs.pop();
        }
    },
    getLogs(lstId: string | number = 0) {
        let newlogs = [];
        if (lstId === 0) {

          return   Object.values(this.logs);
            
        }
       
        if (this.lastId === lstId) return newlogs;

        for (let index = 0; index < this.logs.length; index++) {
            const element = this.logs[index];
            if (element.id != lstId) {
                newlogs.push(element);
            } else {
                break;
            }

        }
        return newlogs;
    }
}

export default out;