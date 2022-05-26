interface Human {
    name: string;
    eat(): void;
}

class Asian implements Human {

    constructor(public name: string) {
        
    }
    //  类“Asian”错误实现接口“Human”.  属性“name”在类型“Asian”中受保护，但在类型“Human”中为公共属性。
    // protected name: string;

    eat(): void {
        console.log(`${this.name} eat!`);
    }

}

let asian: Asian = new Asian('Hello');

asian.eat();

interface Man extends Human {
    run(): void;
}

interface Child {
    cry(): void;
}

interface Boy extends Man, Child {

}

let boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {}
}

class Auto {
    state = 1;
    // private priState = 0;
}

interface AutoInterface extends Auto {

}

class C implements AutoInterface {
    state: number = 2;

}

class Bus extends Auto implements AutoInterface {

}
