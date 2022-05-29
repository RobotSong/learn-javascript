# 文字标注功能

接口参考地址:
[Selection API](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection)

实现参考思路地址:
[原博客](https://juejin.cn/post/6854573210638221320)

- [x] 防抖函数
- [x] 选中监听，和清除
- [x] 判断选中元素中，是否包含特定元素
- [x] 若是选中元素中的文字，则在文字上方弹出添加标注 按钮
- [x] 添加标注后，选中文字，添加下划线

## 防抖函数

普通防抖动函数

```javascript
function debounce(fn,wait){
    var timer = null;
    return function(){
        if(timer !== null){
            clearTimeout(timer);
        }
        timer = setTimeout(fn,wait);
    }
}
```

生产上，用别人写的， 由于我只用了防抖，所以我只安装防抖函数

```
npm i --save lodash.debounce
```

使用方法

```

import debounce from 'lodash.debounce'

textChange: debounce(function() {
//注意这里如果使用箭头函数的话， this为 undefined https://github.com/vue-styleguidist/vue-docgen-api/issues/23
         // do sth
}, 300)

```

## 选中文字监听 和 清除

```javascript
function selectionChange(e) {
    console.log('event:', e)
    // 是否选中 span 标签
    let node = document.getElementById('qwer');
    // 是否包含 qwer 标签
    let flag = document.getSelection().containsNode(node, true);
    if (flag) {
    console.log('包含:', flag)
    // 包含特定元素

    }
}

document.addEventListener('selectionchange', selectionChange);

function clearListener() {
document.removeEventListener('selectionchange', selectionChange)
}
```

