// 使用 redux 提供的  creatStore 函数来创建 store
import { createStore } from "redux"
// 引入 reducer， 用来帮 store 处理操作
import countReducer from './count_reducer'

const store = createStore(countReducer)
// 暴露 store
export default store