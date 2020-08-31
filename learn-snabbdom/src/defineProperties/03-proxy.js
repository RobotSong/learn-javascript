// 模拟 Vue 中的 data 选项
let data = {
    msg: 'hello',
    count: 0
};

// 模拟 Vue 的实例
let vm = new Proxy(data, {
    // 执行代理行为的函数
    // 当访问 vm 的成员会执行
    get(target, key) {
        console.log("get, key: ", key , target[key]);
        return target[key];
    },
    set(target, key, newValue) {
        console.log("set, key: ", key, target[key]);
        if (target[key] === newValue) {
            return
        }
        target[key] = newValue;
        // 数据更改, 更新 DOM 的值
        document.querySelector('#app').textContent = target[key];
    }
});
// 测试
vm.msg = 'hello world!';
console.log(vm.msg);
