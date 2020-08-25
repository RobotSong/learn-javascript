// var snabbdom = require("snabbdom");
// 错误导入 snabbdom 的方式
// import snabbdom from 'snabbdom'
// console.log(snabbdom);

import { h, init } from "snabbdom";

// 1. hello world
// 参数: 模块数组
// 返回值: patch 函数, 作用:对比两个 VNode 的差异更新到真实DOM
let patch = init([]);
// 第一个参数: 标签 + 选择器
// 第二个参数: 如果是字符串的话就是标签中的内容
let vnode = h("div#container.cls", {
    hook: {
        init(vNode) {
            console.log(vNode.elm);
        },
        create(emptyVnode, vNode) {
            console.log(vNode.elm);
        }
    }

},"Hello World");

let app = document.querySelector("#app");
// 第一个参数: 可以是DOM元素, 内部会把DOM元素转换成VNode
// 第二个参数: VNode
// 返回值: VNode
let oldVnode = patch(app, vnode);

// 假设的时刻
vnode = h("div", "Hello Snabbdom");

patch(oldVnode, vnode);
// 2. div 中放置子元素 h1, p
// 在 02-basicusage.js 中