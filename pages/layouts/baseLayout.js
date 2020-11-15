import React, {Component} from 'react';
import {Row, Col} from 'antd';
import NavBar from '../../components/navBar';

class BaseLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <NavBar/>
                {this.props.children}
            </>
        )
    }
}

export default BaseLayout;