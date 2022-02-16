import React, {Component} from 'react';
import axios from "axios";

class App extends Component {


    render() {
        return (
            <div>
                <button onClick={this.getBaidu}>请求百度</button>
                <button onClick={this.getBing}>请求bing</button>
            </div>
        );
    }

    getBaidu = () => {
        axios.get('http://localhost:3000/api1').then(
            response => {console.log('请求成功了', response.data)},
            error => {console.log('请求失败了', error)}
        )
    }

    getBing = () => {
        axios.get('http://localhost:3000/api2').then(
            response => {console.log('请求成功了', response.data)},
            error => {console.log('请求失败了', error)}
        )
    }
}

export default App;