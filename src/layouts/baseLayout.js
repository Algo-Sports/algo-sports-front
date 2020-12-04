import React, {Component} from 'react';
import {NavBar} from '../components/navBar';
import Footer from '../components/footer';

class BaseLayout extends Component {

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