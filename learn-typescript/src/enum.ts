// 数字枚举
enum Role {
    Reporter,
    Developer = 2,
    Maintainer,
    Owner,
    Guest
}
console.log("Role.Developer = " + Role.Developer)
console.log(Role)
// 字符串枚举
enum Message {
    Success = '恭喜你,成功了',
    Fail = '抱歉,失败了'
}

// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}

console.log('Answer.Y = ' + Answer.Y);

// 枚举成员
enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    // computed
    d = Math.random(),
    e = '123'.length
}
console.log(Char)

//  常量枚举 -> 编译阶段会被移除, 编译后的代码会变得简洁
const enum Month {
    Jan,
    Feb,
    Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar];
console.log(month)

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3;
let f: F = 3;

let e1: E.a = 3;
let e2: E.b = 3;
let e3: E.a = 3;
console.log("e1 === e3 : "  + (e1 === e3))

let g1: G = G.a;
let g2: G.a;



