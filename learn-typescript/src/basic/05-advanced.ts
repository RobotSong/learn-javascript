let obj05 = {
    a: 1,
    b: 2,
    c: 3
}

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key]);
}

console.log(getValues(obj05, ['a', 'b']));
// 类型检查
// console.log(getValues(obj05, ['e', 'f']));

// keyof T
interface Obj {
    a: number,
    b: string
}

let key: keyof Obj;

// T[key]
let value: Obj['a'];

// T extends U

