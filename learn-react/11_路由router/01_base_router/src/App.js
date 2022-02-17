import React, {Component} from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid py-4 mt-4">
                    <div className="container">
                        <h1 className="display-6">React Router Demo</h1>
                    </div>
                </div>

                    <div className="row">
                        <div className="col-3">
                            {/* 在多页面应用中，通过 a 标签的 href 来切换不同的页面 */}
                            <div className="nav flex-column nav-pills p-3 border rounded">
                                {/*    <a className="nav-link active" href="./home.html" >Home</a>*/}
                                {/*    <a className="nav-link" href="./about.html" >About</a>*/}
                                {/* 在单页应用中， 靠 路由连接（Link） 来实现切换不同的组件，路由连接要被路由器包裹才能使用   */}
                                {/*   编写路由连接 */}
                                <Link className="nav-link" to={'/home'} >Home</Link>
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="p-3 border rounded h-100">
                                {/* 注册路由 */}
                                <Routes>
                                    <Route path={'/home'} element={<Home />} />
                                    <Route path={'/about'} element={<About />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default App;