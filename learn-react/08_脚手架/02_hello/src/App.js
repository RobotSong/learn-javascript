import React, { Component } from 'react' // 导入 React 模块暴露的 Component
import Hello from './components/Hello'
import Welcome from './components/Welcome'

// const { Component } = React // 从 React 对象上解构出 Component
// 创建 APP 组件， 并默认暴露
export default class App extends Component {

    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}
