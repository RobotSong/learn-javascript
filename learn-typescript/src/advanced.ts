// 类型推断
let a = 1;
let b = [1, '2', null];

let c = (x = 1) => x + 1;

window.onkeydown = (event: KeyboardEvent) => {
    console.log(event.keyCode);
}

// 类型断言 避免滥用
interface Foo {
    bar: number;
}
// let foo = {} as Foo;
// foo.bar = 1;
let foo: Foo = {
    bar: 23
};
console.log('Foo属性', foo.bar);