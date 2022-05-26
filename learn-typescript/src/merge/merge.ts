// 声明合并
interface MA {
    x: number;
    // 当属性名一致时, 不允许类型不一致
    // y: string;
    foo (bar: number): number; // 5
    foo (bar: 'a'): number;    // 2
}

// 函数合并 顺序的规则
// 1. 接口内按照 书写顺序
// 2. 后面的接口会排在前面 
// 3. 函数参数为字面量时, 函数顺序为最顶端
interface MA {
    y: number;
    foo(bar: string): string;    // 3
    foo(bar: number[]): number[];// 4
    foo(bar: 'b'): number;       // 1
}

let meA: MA = {
    x: 1,
    y: 1,
    foo(bar: any) {
        return bar;
    }
}

// 命名空间 和 函数 的合并, 命名空间需要放在后面
function Lib() {}
// 会给函数赋值 属性名 : version
namespace Lib {
    export let version = '1.0';
}

console.log('Lib.version:', Lib.version);
// 命名空间 和 类 的合并, 命名空间需要放在后面

class MC {}
namespace MC {
    export let state = 1;
}
console.log('MC.state:', MC.state);

// 命名空间 和 枚举 的合并 
enum MColor {
    Red,
    Yellow,
    Bule
}
namespace MColor {
    export function mix() {}
}
console.log('MColor:', MColor);

