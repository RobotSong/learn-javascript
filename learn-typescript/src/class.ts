// 抽象类
abstract class Animal {
    eat() {
        console.log('eat');
    }

    abstract sleep(): void;
}

// let animal = new Animal();

class Dog extends Animal {
    constructor(name: string) {
        super();
        this.name = name;
        this.legs = 2;
    }

    name: string;

    run() {
        console.log(`${this.name} run!`);
    }

    private pri() {
        console.log('dsad');
    }

    protected pro() {}

    sleep() {
        console.log(`${this.name} sleep!`);
    }


    readonly legs: number;

    static food: string = 'bones';
}

console.log(Dog.prototype);

let dog: Dog = new Dog('2333');
console.log(dog);
dog.run();
dog.eat();
// dog.pri();
// dog.pro();
// console.log(Dog.food, dog.food);
class Husky extends Dog {

    constructor(name: string, public color: string) {
        super(name);
        // super.pri();
        this.color = color;
        super.pro();
    }
    // 在构造函数上定义为 public 时, 不需要再额外定义
    // color: string;

}

console.log('----');
console.log(Husky.prototype);
console.log(Husky.food);

class Cat extends Animal {
    sleep(): void {
        console.log('Cata sleep!')
    }
}

let cat = new Cat();

let animals: Animal[] = [dog, cat];

animals.forEach(i => {
    i.sleep();
});

class WorkFlow {
    step1() {
        return this;
    }

    step2() {
        return this;
    }
}

new WorkFlow().step1().step2();

class MyFlow extends WorkFlow {
    next() {
        return this;
    }
}

new MyFlow().next().step1().next().step2();

