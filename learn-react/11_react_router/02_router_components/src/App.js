import React, {Component} from 'react';
import {NavLink, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

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
                            {/*    <a className="nav-link active" href="./home.html" >Home</a>*/}
                            {/*    <a className="nav-link" href="./about.html" >About</a>*/}
                            {/* 在单页应用中， 靠 路由连接（Link） 来实现切换不同的组件，路由连接要被路由器包裹才能使用   */}
                            {/*   编写路由连接 */}
                            <NavLink className={ (obj) => {
                                let {isActive} = obj
                                return 'nav-link' + (isActive ? ' myActive' : '')
                            }} to={'/home'}>Home</NavLink>
                            <NavLink className={ (obj) => {
                                let {isActive} = obj
                                return 'nav-link' + (isActive ? ' myActive' : '')
                            }} to={'/about'}>About</NavLink>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="p-3 border rounded h-100">
                            {/* 注册路由 */}
                            <Routes>
                                <Route path={'/home'} element={<Home b={2} />}/>
                                <Route path={'/about'} element={<About c={3}/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;