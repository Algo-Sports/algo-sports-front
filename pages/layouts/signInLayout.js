import React, {Component} from 'react';
import {Row, Col, Card} from 'antd';
import styles from '../../styles/signInLayout.module.css'

class SignInLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Row justify="center" className={styles.row}>
                <Col xs = {12} sm = {12} md = {8} lg = {8} style={{display:"flex"}}>
                    <Card bordered="true" style={{margin:"auto", width:"100%", height:"400px", borderRadius:"10px"}}>
                        {this.props.children}
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default SignInLayout;