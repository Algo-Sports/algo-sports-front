import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import styles from '../styles/signInLayout.module.css'

class SignInLayout extends Component {

  render() {
    return (
      <Row justify="center" className={styles.row}>
        <Col xs={12} sm={12} md={8} lg={8} style={{ display: "flex", transition: "1s" }}>
          <Card
            bordered="true"
            className = "margin-auto width-100"
            style={{ height: "fit-content", borderRadius: "10px" }}>
            {this.props.children}
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SignInLayout;