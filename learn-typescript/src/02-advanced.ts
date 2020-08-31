/**
 * 类型兼容
 * X 兼容 Y: X (目标类型) = Y (源类型)
 * 结构之间兼容: 成员少的兼容成员多的
 * 函数之间兼容: 参数多的兼容参数少的
 */
let s: string = 'a';
// 在 tsconfig.json 中配置 strictNullChecks ,可以将字符串变量赋值为 null
s = null;
// 接口兼容性
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}
let x1: X = { a: 1, b: 2 };
let y: Y = { a: 1, b: 2, c: 3 };
x1 = y;
// y = x1 ; // 赋值错误
// 函数兼容性
type Handler = (a: number, b: number) => void

function hof(handler: Handler) {
    return handler;
}

// 1. 参数个数 
let handler1 = (a: number) => {};
hof(handler1)
let handler2 = (a: number, b: number, c: number) => {}
// 不允许多的参数赋值给少的参数
// hof(handler2)

//  可选参数和剩余参数
let paramA = (p1: number, p2: number) => {}
let paramB = (p1?: number, p2?: number) => {}
let paramC = (...args: number[]) => {}
// 固定参数 兼容可选参数和剩余参数
// paramA = paramB;
// paramA = paramC;
// 可选参数不兼容固定参数 ??? -> 1.strictFunctionTypes 为 false 时, 不检查 2. VS Code的问题?
// paramB = paramA;
// paramB = paramC;
paramC = paramB;
paramC = paramA;

// 2. 参数类型
let handler3 = (a: string) => {}
// hof(handler3);

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}

let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d;
// p2d = p3d;

// 3) 返回值类型
let f1 = () => ({ name: 'Alice' })
let g = () => ({ name: 'Alice', location: 'Beijing' })
f1 = g;
// g = f1;

// 函数重载
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {

}

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 4;
console.log(fruit);
let no: number = Fruit.Apple;
console.log(no);
// let color: Color.Red = Fruit.Apple;

// 类兼容性
class A {
    constructor(p: number, q: number) {}
    id: number = 1;
    private name: string = '';
}
class B {
    static s = 1;
    constructor(p: number) {}
    id: number = 2;
    private name: string = '';
}
let aa = new A(1, 2);
let bb = new B (1);
// 存在私有成员, 则不兼容
// aa = bb;
// bb = aa;

class CC extends A {}
let cc = new CC(1, 2);
aa = cc;
cc = aa;

// 泛型兼容性
interface Empty<T> {
    value: T;
}
let obj1: Empty<number> = { value:  2 };
let obj2: Empty<string> = { value: '2' }
// obj1 = obj2;

// 泛型函数
let logGenerics1 = <T>(x: T): T => {
    console.log(x);
    return x;
}
let logGenerics2 = <U>(y: U): U => {
    console.log(y);
    return y;
}

logGenerics1 = logGenerics2
