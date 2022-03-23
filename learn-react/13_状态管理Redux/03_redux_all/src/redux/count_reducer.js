import {INCREMENT, DECREMENT} from "./constant"
// 初始化 state
const initCountState = 0

/**
 * 该文件是 Count 组件 reducer， 专门为 Count 组件提供服务， reducer 本质就是一个函数
 * Count 组件的 reducer
 *
 * @param preState     上一次保存的状态，初始化的时候 是 undefined
 * @param action       操作 { type: 'xx', data: '数据，可以选' }
 * @returns {number|*}
 */
function countReducer(preState = initCountState, action) {
    console.log(preState, action)
    // 根据 action 的 type 不同， 执行不同操作
    let { type, data } = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}

export default countReducer