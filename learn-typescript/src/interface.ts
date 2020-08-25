interface List {
  readonly id: number;
  name: string;
  // 字符串索引签名
  // [x: string]: any;
  // 可选属性
  age?: number;
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
  });
}

let result = {
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B", age: 10 },
  ],
};

render(result);

// 第一种类型断言
// render({
//     data: [
//         { id: 1, name: 'A', sex: 'male' },
//         { id: 2, name: 'B' }
//     ]
// } as Result);
// 第二种类型断言
// render(<Result>{
//     data: [
//         { id: 1, name: 'A', sex: 'male' },
//         { id: 2, name: 'B' }
//     ]
// });

// 第二种类型断言
// render(<Result>{
//     data: [
//         { id: 1, name: 'A', sex: 'male' },
//         { id: 2, name: 'B' }
//     ]
// });
// 第三种类型断言, 在接口中加上 字符串索引签名
// render({
//     data: [
//         { id: 1, name: 'A', sex: 'male' },
//         { id: 2, name: 'B' }
//     ]
// });

// 字符串数组, 用字符串做索引
interface StringArray {
  [index: number]: string;
}

let chars: StringArray = ["A", "B"];

interface Names {
  [x: string]: string;
  // 类型“ number”的属性“ y”不可分配给字符串索引类型“ string”。
  // y: number;1
  [z: number]: string;
}

let names: Names = {
  a: "d",
  12: "a",
};

let sub: (x: number, y: number) => number;

// interface Add {
//   (x: number, y: number): number;
// }
// 类型别名, 为函数起名字
type Add = (x: number, y: number) => number;

let add: Add = (a, b) => a + b;

// 混合接口
interface Lib {
  (): void;

  version: string;

  doSomething(): void;
}

function getLib(): Lib {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "1.0";
  lib.doSomething = () => {
    console.log("doSomething");
  };
  return lib;
}

let lib1 = getLib();
lib1.doSomething();
let lib2 = getLib();
console.log(lib2.version);






