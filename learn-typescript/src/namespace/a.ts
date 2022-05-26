// 命名空间
namespace Shape {
    // 不使用 export 关键字 只能在内部使用
    const pi = Math.PI;
    // export 外部即可使用
    export function cricle (r: number) {
        return pi * r ** 2;
    }
}