## 路由的基本使用

### react-route 的理解

- react的一个插件库
- 专门用来实现一个 SPA 应用
- 基于 react 的项目基本都会用到此库。

### reacte-route 相关API

#### 内置组件

1. <BrowserRouter />
2. <HashRouter />
3. <Route />
4. <Routes />
5. <Redirect />
6. <Link />
7. <NavLink />
8. <Switch />

#### 其它

1.  history 对象
2. match 对象
3. withRouter 函数

### 自定义组件的时候

标签体的内容作为一个特殊的 props 传递给组件， key 是 children， value 是标签体的内容
