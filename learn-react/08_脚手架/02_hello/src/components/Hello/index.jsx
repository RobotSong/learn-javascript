import { Component } from 'react'
import HelloCss from './index.module.css'

class Hello extends Component {
    render() {
        return (
            <h3 className={HelloCss.title}>
                Hello React
            </h3>
        )
    }
}

export default Hello