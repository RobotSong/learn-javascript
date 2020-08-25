// 原始类型
let bool: boolean = true;
let num: number | undefined | null = 123;
let str: string = "abc";

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, "4"];

// 元组
let tuple: [number, string] = [0, "1"];
tuple.push(1);
console.log(tuple);

// 函数
// let add = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

console.log(compute);
// 对象
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj["x"] = 3;
console.log(obj);

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

// undefined, null
let un: undefined = undefined;
let nu: null = null;
num = un;
num = nu;

// void
let noReturn = () => {};

// any
let x;
x = 123;
x = "str";
x = true;
x = undefined;
x = null;
x = () => {};

// never 表示永远不会有返回值的类型
let error = () => {
  throw new Error("error2");
};

let endless = () => {
  while (true) {}
};

// 类定义
class Task {
  constructor() {
    console.log("task instantiated!");
  }

  showId() {
    console.log(23);
  }

  static loadAll() {
    console.log("Loading all tasks..");
  }
}

let task: Task = new Task();
task.showId();
