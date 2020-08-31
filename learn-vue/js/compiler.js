class Compiler {
  constructor(vm) {
    this.el = vm.$el;
    this.vm = vm;
    this.compile(this.el);
  }
  // 编译模板, 处理文件节点和元素节点
  compile(el) {
    let childNodes = el.childNodes;
    Array.from(childNodes).forEach((node) => {
      // 处理文本节点
      if (this.isTextNode(node)) {
        this.compileText(node);
      } else if (this.isElementNode(node)) {
        // 处理元素节点
        this.compileElement(node);
      }

      // 判断 node 节点, 是否有子节点, 如果有子节点, 要递归调用comile
      if (node.childNodes && node.childNodes.length) {
        this.compile(node);
      }
    });
  }
  // 编译元素节点, 处理指令
  compileElement(node) {
    //   console.log(node.attributes);
    // 遍历所有的属性节点
    Array.from(node.attributes).forEach((attr) => {
      // 判断是否是指令
      let attrName = attr.name;
      if (this.isDirective(attrName)) {
        // v-text --> text
        attrName = attrName.substr(2);
        let key = attr.value;
        this.update(node, key, attrName);
      }
    });
  }

  update(node, key, attrName) {
    let updateFn = this[attrName + "Updater"];
    // 改变 this 指向
    updateFn && updateFn.call(this, node, this.vm[key], key);
  }

  // 处理 v-text 指令
  textUpdater(node, value, key) {
    node.textContent = value;
    // 创建 watcher 对象, 当数据变化时, 更新视图
    new Watcher(this.vm, key, (newValue) => {
      node.textContent = newValue;
    });
  }
  // 处理 v-model 指令
  modelUpdater(node, value, key) {
    node.value = value;
    // 创建 watcher 对象, 当数据变化时, 更新视图
    new Watcher(this.vm, key, (newValue) => {
      node.value = newValue;
    });
    // 双向绑定
    node.addEventListener('input', () => {
      this.vm[key] = node.value;
    });
  }

  // 编译文本节点, 处理差值表达式
  compileText(node) {
    // console.dir(node);
    // {{ msg }}
    let reg = /\{\{(.+?)\}\}/;
    let value = node.textContent;
    if (reg.test(value)) {

      let key = RegExp.$1.trim();
      node.textContent = value.replace(reg, this.vm[key]);
      // TODO 循环调用, 如果存在多个差值表达式, 怎么处理. 循环调用出现问题   
      // this.compileText(node);
      // 创建 watcher 对象, 当数据变化时, 更新视图
      new Watcher(this.vm, key, (newValue) => {
        // TODO 变化的只是属性的值
        node.textContent =newValue;
      });
    }
  }
  // 判断元素属性是否是指令
  isDirective(attrName) {
    return attrName.startsWith("v-");
  }
  // 判断节点是否是文本节点
  isTextNode(node) {
    return node.nodeType === 3;
  }
  // 判断节点是否是元素节点
  isElementNode(node) {
    return node.nodeType === 1;
  }
}
