import React, {Component} from 'react';

class Header extends Component {
    render() {
        console.log('Header组件的 props 是:', this.props)
        return (
            <div className="container">
                <h1 className="display-6">React Router Demo</h1>
            </div>
        );
    }
}

export default Header;