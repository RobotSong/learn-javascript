import React, {Component} from 'react';
import MyNavLink from '../../components/MyNavLink'
import { Route, Routes} from "react-router-dom";
import News from './News'
import Message from './Message'

class About extends Component {
    render() {
        console.log('通过路由加载的组件的 props 是:', this.props)
        return (
            <div>
                <h4>我是About内容</h4>
                <br />
                <div className="nav nav-pills">
                    <MyNavLink to={'/about/news'}>news</MyNavLink>
                    <MyNavLink to={'/about/message'}>message</MyNavLink>
                </div>
                <div className="mt-4 px-2">
                    <Routes>
                        <Route path={'/news'} element={<News />}/>
                        {/* 模糊匹配* */}
                        <Route path={'/message/*'} element={<Message />}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default About;