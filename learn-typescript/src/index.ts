import "./06-advanced.ts"

let hello: string = "Hello, TypeScript";
document.querySelectorAll(".app")[0].innerHTML = hello;

let c: any = document.getElementById("myCanvas");

let cxt: CanvasRenderingContext2D = c.getContext("2d");

var grd = cxt.createLinearGradient(0, 0, 175, 50);
grd.addColorStop(0, "#FF0000");
grd.addColorStop(1, "#00FF00");
cxt.fillStyle = grd;
cxt.fillRect(0, 0, 175, 50);

// 防抖函数
const debounce = (func: Function, wait = 0) => {
    let timeout: any = null;
    let args: any[];
    function debounced(...arg: any[]) {
        args = arg;
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        // 以 Promise 的形式返回函数执行结果
        return new Promise((res, rej) => {
            timeout = setTimeout(async () => {
                try {
                    const result = await func.apply(func, args);
                    res(result);
                } catch (e) {
                    rej(e);
                }

            }, wait);
        });
    }

    // 允许取消
    function cancel() {
        clearTimeout(timeout);
        timeout = null;
    }
    // 允许直接执行
    function flush() {
        cancel();
        return func.apply(func, args);
    }
    debounced.cancel = cancel;
    debounced.flush = flush;

    return debounced;
}

// 节流函数
const throttle = (func: Function, wait = 0, execFirstCall?: any) => {
    let timeout: any  = null;
    let args: any[];
    let firstCallTimestamp: number;


    function throttled(...arg: any[]) {
        if (!firstCallTimestamp) firstCallTimestamp = new Date().getTime()
        if (!execFirstCall || !args) {
            console.log('set args:', arg)
            args = arg
        }
        if (timeout) {
            clearTimeout(timeout)
            timeout = null
        }
        // 以Promise的形式返回函数执行结果
        return new Promise(async (res, rej) => {
            if (new Date().getTime() - firstCallTimestamp >= wait) {
                try {
                    const result = await func.apply(func, args)
                    res(result)
                } catch (e) {
                    rej(e)
                } finally {
                    cancel()
                }
            } else {
                timeout = setTimeout(async () => {
                    try {
                        const result = await func.apply(func, args)
                        res(result)
                    } catch (e) {
                        rej(e)
                    } finally {
                        cancel()
                    }
                }, firstCallTimestamp + wait - new Date().getTime())
            }
        })
    }
    // 允许取消
    function cancel() {
        clearTimeout(timeout)
        args = null
        timeout = null
        firstCallTimestamp = null
    }
    // 允许立即执行
    function flush() {
        cancel()
        return func.apply(func, args)
    }
    throttled.cancel = cancel
    throttled.flush = flush
    return throttled
}


