//
class Observer {
  constructor(data) {
    this.walk(data);
  }

  /**
   *
   * @param {*} data
   */
  walk(data) {
    // 1. 判断 data 是否是对象
    if (!data || typeof data !== "object") {
      return;
    }
    // 2. 遍历data 对象的所有属性
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key]);
    });
  }

  defineReactive(obj, key, val) {
      let that = this;
      // 负责收集依赖,并发送通知
      let dep = new Dep();
      // 如果 val 是对象, 把 val 内部的属性转换成响应式数据
    this.walk(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        // 如果使用 obj[key] 会出现死循环递归 -> Uncaught RangeError:  Maximum call stack size exceeded
        // return obj[key];
        // 收集依赖
        Dep.target && dep.subs.push(Dep.target);
        return val;
      },
      set(newValue) {
        if (newValue === val) {
          return;
        }

        val = newValue;
        that.walk(newValue);
        // 发送通知
        dep.notify();
      }
    });
  }
}
