// 导入
import { a, b, c } from './a'; // 批量导入
import { P } from './a'; // 导入接口
import { f as F } from './a'; // 导入时,起别名
import * as All from './a'; // 导入模块中的所有成员, 绑定在 All 上
import myFunction from './a'; // 不加 {}, 导入默认
export default function() {};
console.log(a, b, c);

let p: P = {
    x: 12,
    y: 23
}

console.log(All);

F();

myFunction();
