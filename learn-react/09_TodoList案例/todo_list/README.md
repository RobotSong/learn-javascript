packages.json 文件下，添加该属性，可以简单设置代理地址

"proxy": "http://www.baidu.com"

# src/setupProxy.js 
react 17.0 版本以上，需要手动添加 "http-proxy-middleware" 依赖

yarn add http-proxy-middleware

文件内容如下:
```javascript
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给 www.baidu.com)
            target: 'https://www.baidu.com', //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            /*
                changeOrigin设置为true时，服务器收到的请求头中的host为：https://www.baidu.com
                changeOrigin设置为 false 时，服务器收到的请求头中的host为：localhost:3000
                changeOrigin默认值为false，但我们一般将changeOrigin值设为true
            */
            pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        }),
        // 可以配置多个代理
        createProxyMiddleware('/api2', {
            target: 'https://cn.bing.com',
            changeOrigin: false, // 设置 false 时， cn.bing.com 拒绝请求 Error occurred while trying to proxy: localhost:3000
            pathRewrite: {'^/api2': ''}
        })
    )
}
```