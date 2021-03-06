
class Vue {
    constructor(options) {
        // 1.通过属性保存选项的数据
        this.$options = options || {};
        this.$data = this.$options.data || {};
        this.$el = typeof this.$options.el === 'string' ? document.querySelector(this.$options.el) : this.$options.el;
        // 2.把 data 中的成员转换成 getter 和 setter .注入到 Vue 实例中
        this._proxyData(this.$data);
        // 3.调用 observer 对象, 监听数据的变化
        new Observer(this.$data);
        // 4. 调用 compiler 对象, 解析指令和差值表达式
        new Compiler(this);
    }

    _proxyData(data) {
        // 遍历 data 中的 所有属性
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true, 
                get() {
                    return data[key];
                },

                set(newValue) {
                    if (newValue === data[key]) {
                        return ;
                    }

                    data[key] = newValue;
                }
            });
        });
        // 把 data 的属性注入到 vue 实例中
    }
}