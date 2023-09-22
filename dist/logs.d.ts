declare const out: {
    maxSize: number;
    lastId: number;
    logs: any[];
    console: {
        log(): void;
        error(): void;
    };
    push(msg: string | any, level?: "log" | "error", tag?: string): void;
    getLogs(lstId?: string | number): any[];
};
export default out;
