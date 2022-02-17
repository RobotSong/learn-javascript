import React, {Component} from 'react';

class About extends Component {
    render() {
        console.log('通过路由加载的组件的 props 是:', this.props)
        return (
            <h4>我是About内容</h4>
        );
    }
}

export default About;