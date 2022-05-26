let o: any = new Object();

o[Symbol.iterator] = function() {
    let v = 0;
    return {
        next: function() {
            return { value: v++, done: v > 10 };
        }
    }
};

let sb: Symbol = Symbol('TEST_B');


for (let v of o) {
    console.log('value:', v);
}
