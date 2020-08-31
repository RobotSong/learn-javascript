// 发布-订阅模式
// 事件触发器
class EventEmitter {

    constructor() {
        // { 'click': [fn1, fn2], 'change': [fn] }
        this.subs = Object.create(null);
    }
    // 注册事件
    $on(eventType, handler) {
        this.subs[eventType] = this.subs[eventType] 
        || [];

        this.subs[eventType].push(handler);2
    }

    // 触发事件
    $emit(eventType) {
        if (this.subs[eventType]) {
            this.subs[eventType].forEach(handler => {
                handler();
            });
        }
    }
}


// 测试
let em = new EventEmitter();

em.$on('click', () => {
    console.log('click1')
});
em.$on('click', () => {
    console.log('click2')
});

em.$emit('click');

