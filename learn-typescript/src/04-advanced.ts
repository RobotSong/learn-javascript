// 交叉类型与联合类型
interface DogInterface {
    run(): void;
}
interface CatInterface {
    jump(): void;
}
// 交叉类型
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
};
// 联合类型
let ma: number | string = 'a';
// 字面量联合类型
let mb: 'a' | 'b' | 'c' = 'b';
let mc: 1 | 2 | 3 = 2; 

class MyDog implements DogInterface {
    run(): void {
        
    }
    eat() {}
}

class MyCat implements CatInterface {
    jump(): void {
    }
    eat() { }
}

enum Master { Boy, Girl }

function getPet(master: Master) {
    let pet = master === Master.Boy ? new MyDog() : new MyCat();
    pet.eat();
    return pet;
}

interface Square {
    kind: 'square';
    size: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    r: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape): number {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
        case "circle":
            return Math.PI * s.r ** 2;
        default:
            return ((e: never) => { throw new Error(e); } )(s);
    }
}
