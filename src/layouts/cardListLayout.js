import React, { Component } from 'react';
import { Row, Col } from 'antd';

class CardListLayout extends Component {

  render() {
    return (
      <Row gutter={[8, 32]}>
        {
          React.Children.map(this.props.children, child => {
            return (
              <Col lg={{ span: 12 }}>
                <Row>
                  <Col lg={{ span: 2 }} />
                  <Col lg={{ span: 20 }}>
                    {child}
                  </Col>
                  <Col lg={{ span: 2 }} />
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