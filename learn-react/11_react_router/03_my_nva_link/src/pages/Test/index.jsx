import React, {Component} from 'react';

class Test extends Component {
    render() {
        console.log('通过路由加载的组件的 props 是:', this.props)
        return (
            <h4>我是 Test 内容</h4>
        );
    }
}

export default Test;