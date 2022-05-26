class ClassLog<T> {
    // static run (value: T) -> 静态成员不能引用类类型参数.
    run(value: T) {
        console.log(value);

        return value;
    }
}

let log1 = new ClassLog<number>();
log1.run(1);
let log2 = new ClassLog();
log2.run({});

interface Length {
    length: number;
}
function funLog<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}

funLog('dsad00');
funLog([12, 3232]);
funLog({length : 23});
