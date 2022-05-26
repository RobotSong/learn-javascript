// 泛型: 不预先确定的数据类型, 具体的类型在使用的时候才能确定
// 1. 函数和类可以轻松支持多种类型, 增强程序的扩展性
// 2. 不必写多条函数重载, 冗长的联合类型声明, 增强代码可读性
// 3. 灵活控制类型之间的约束
function log<T>(value: T): T {
    console.log(value);
    return value;
}

log<string[]>(['a', 'b']);
log([1, 2, 'as']);

// type Log = <T>(value: T) => T;
// let myLog: Log = log;

interface Log<T = string> {
    (value: T): T;
}

let myLog: Log = log;
myLog('123');


