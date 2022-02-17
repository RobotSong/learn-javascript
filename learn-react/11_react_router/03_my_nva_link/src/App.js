import React, {Component} from 'react';
import {Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// import Test from './pages/Test'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid py-4 mt-4">
                    <Header a={1} />
                </div>

                <div className="row">
                    <div className="col-3">
                        {/* 在多页面应用中，通过 a 标签的 href 来切换不同的页面 */}
                        <div className="nav flex-column nav-pills p-3 border rounded">
                            {/*   标签体的内容作为一个特殊的 props 传递给组件， key 是 children， value 是标签体的内容  */}
                            <MyNavLink to={'/home'}>Home</MyNavLink>
                            <MyNavLink to={'/about/bac'}>About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="p-3 border rounded h-100">
                            {/* 注册路由 */}
                            <Routes>
                                <Route path={'/home'} element={<Home b={2} />}/>
                                {/* 模糊匹配*/}
                                <Route path={'/about/*'} element={<About c={3}/>}/>
                                {/*<Route path={'/demo/about'} element={<Test d={4}/>}/>*/}
                                {/* 重定向解决方案 */}
                                <Route path={'*'}  element={<Navigate to="/home" />} />
                            </Routes>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;