/**
 * 为 Count 组件生成 action 对象
 */
import { INCREMENT, DECREMENT } from './constant'

// 用于 加的 action
export const createIncrementAction = (data) => ({
    type: INCREMENT,
    data: data
})

// 用于减的 action
export const createDecrementAction = (data) => ({
    type: DECREMENT,
    data: data
})
