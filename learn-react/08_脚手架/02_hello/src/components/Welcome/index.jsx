import { Component } from 'react'
import WelcomeCss from './index.module.css'

class Welcome extends Component {
    render() {
        return (
            <h3 className={WelcomeCss.title}>
                Welcome React
            </h3>
        )
    }
}

export default Welcome