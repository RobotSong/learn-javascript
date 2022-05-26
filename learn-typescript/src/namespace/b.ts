// 同名命名空间 共享命名空间
/// <reference path="a.ts" />
// 三斜杠的使用,引用 a.ts
namespace Shape {
    export function square(x: number) {
        return x * x;
    }
}
// 使用方法一: 先编译为 js, 再在 index.html 中引用
console.log(Shape.cricle(1));
console.log(Shape.square(2));
// 别名
import cricle = Shape.cricle;
console.log(cricle(3));
