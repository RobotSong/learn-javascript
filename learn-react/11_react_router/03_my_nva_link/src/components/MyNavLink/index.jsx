import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        console.log(this.props)
        return (
            <NavLink className={ (obj) => {
                let {isActive} = obj
                return 'nav-link' + (isActive ? ' myActive' : '')
            }} {...this.props} />
        );
    }
}

export default MyNavLink;