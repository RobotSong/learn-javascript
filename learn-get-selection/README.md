# 文字标注功能

接口参考地址:
[Selection API](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection)

实现参考思路地址:
[原博客](https://juejin.cn/post/6854573210638221320)

- [ ] 防抖函数
- [ ] 选中监听
- [ ] 判断选中元素中，是否包含特定元素
- [ ] 若是选择，则弹出添加标注 按钮
- [ ] 添加标注后，选中文字，添加下划线

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

