import React, {Component} from 'react';
import {Row, Col} from 'antd';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

class BaseLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <NavBar/>
                {this.props.children}
                <Footer/>
            </>
        )
    }
}

export default BaseLayout;