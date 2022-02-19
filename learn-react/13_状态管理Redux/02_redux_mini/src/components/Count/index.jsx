import React, {Component} from 'react';
import store from "../../redux/store"

class Count extends Component {

    componentDidMount() {
        console.log('Count 组件加载完成')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Count 组件更新完成')
    }


    increment = () => {
        let { value } = this.selectRef
        // 通知 redux， 执行加
        store.dispatch({
            type: 'increment',
            data: value * 1
        })
    }

    decrement = () => {
        let { value } = this.selectRef
        // 通知 redux， 执行加
        store.dispatch({
            type: 'decrement',
            data: value * 1
        })
    }

    incrementIfOdd = () => {
        let { value } = this.selectRef
        let count = store.getState()
        if (count % 2 === 0) {
            return
        }
        // 通知 redux， 执行加
        store.dispatch({
            type: 'increment',
            data: value * 1
        })
    }

    incrementAsync = () => {
        let { value } = this.selectRef

        setTimeout(() => {
            // 通知 redux， 执行加
            store.dispatch({
                type: 'increment',
                data: value * 1
            })
        }, 500)
    }

    render() {
        return (
            <div>
                <h3>计算结果为：<span>{store.getState()}</span></h3>
                <select ref={c => this.selectRef = c}>
                    <option value={0}>选择要操作的数字</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>当计算结果是奇数时执行</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步执行 +</button>&nbsp;&nbsp;
            </div>
        );
    }
}

export default Count;