import React, { Component } from 'react';
import { Row, Col } from 'antd';

class CardListLayout extends Component {

  render() {
    return (
      <Row gutter={[8, 32]}>
        {
          React.Children.map(this.props.children, child => {
            return (
              <Col lg={{ span: 12 }} md = {{span: 12}} sm = {{span: 24}} xs = {{span: 24}}>
                <Row>
                  <Col lg={{ span: 2 }} md = {{span: 2}} sm = {{span: 1}} xs = {{span: 1}}/>
                  <Col lg={{ span: 20 }} md = {{span: 20}} sm = {{span: 22}} xs = {{span: 22}}>
                    {child}
                  </Col>
                  <Col lg={{ span: 2 }} md = {{span: 2}} sm = {{span: 1}} xs = {{span: 1}}/>
                </Row>
              </Col>
            )
          })
        }
      </Row>
    )
  }
}

export default CardListLayout