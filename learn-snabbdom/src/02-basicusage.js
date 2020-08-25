// 2. div 中放置子元素 h1, p
import { h, init } from "snabbdom";

let patch = init([]);

let vnode = h('div#container', [
    h('h1', 'Hello Snabbdoom'),
    h('p', '这是一个p标签')
]);

let app = document.querySelector('#app');

let oldVnode = patch(app, vnode);

setTimeout(() => {
    vnode = h('div#container', [
        h('h1', 'Hello world'),
        h('p', 'Hello p')
    ]);
    patch(oldVnode, vnode);
    // 清空页面元素 -- 错误
    // patch(oldVnode, null);
    patch(oldVnode, h('!'));
}, 2000);