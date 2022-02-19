import React, {Component} from 'react';

class Count extends Component {

    state = {
        count: 0
    }

    increment = () => {
        let { value } = this.selectRef
        let { count } = this.state
        this.setState({
            count: count + value * 1
        })
    }

    decrement = () => {
        let { value } = this.selectRef
        let { count } = this.state
        this.setState({
            count: count - value * 1
        })
    }

    incrementIfOdd = () => {
        let { value } = this.selectRef
        let { count } = this.state
        if (count % 2 === 0) {
            return
        }
        this.setState({
            count: count + value * 1
        })
    }

    incrementAsync = () => {
        let { value } = this.selectRef
        let { count } = this.state

        setTimeout(() => {
            this.setState({
                count: count + value * 1
            })
        }, 500)
    }

    render() {
        let { count } = this.state
        return (
            <div>
                <h3>计算结果为：<span>{count}</span></h3>
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