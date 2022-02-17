import React, {Component} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Detail from './Detail'

class Message extends Component {

    state = {
        messageArr: [
            {id: '001', title: '消息1'},
            {id: '002', title: '消息2'},
            {id: '003', title: '消息3'},
        ]
    }

    render() {
        return (
            <div>
                {/* 编写路由连接/*/}
                <p></p>
                {
                    this.state.messageArr.map( msg => {
                        return <p key={msg.id}><Link className="text-dark" to={`/about/message/detail/${msg.id}/${msg.title}`}>
                            {msg.title}
                        </Link></p>
                    })
                }
                {/* 注册路由 */}
                <Routes>
                    <Route path={'/detail/:id/:title'} element={<Detail />} />
                </Routes>
            </div>
        );
    }
}

export default Message;