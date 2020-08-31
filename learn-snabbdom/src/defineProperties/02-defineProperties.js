// 模拟 Vue 中的 data 选项
let data = {
    msg: 'hello'
};

// 模拟 Vue 的实例
let vm = {};

proxyData(data);

function proxyData(data) {
    Object.keys(data).forEach(key => {
        // 数据劫持: 当访问或者设置 vm 中的成员的时候, 做一些干预操作
        Object.defineProperty(vm, key, {
            // 可枚举(可遍历)
            enumerable: true,
            // 可配置(可以使用 delete 删除, 可以通过 defineProperty 重新定义)
            configurable: true,
            // 当获取值的时候执行
            get() {
                console.log('get:', data.msg);
                return data.msg;
            },
            // 当设置值的时候执行
            set(newValue) {
                console.log('set:', newValue);
                if (data.msg === newValue) {
                    return
                }
                data.msg = newValue;
                // 数据更改, 更新 DOM 的值
                document.querySelector('#app').textContent = data.msg;
            }

        });
    });
}


// 测试
vm.msg = 'hello world!';
console.log(vm.msg);
