import React, { Component } from 'react';
import SiderLayout from './siderLayout';

class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SiderLayout>
          {this.props.children}
        </SiderLayout>
      </div>
    )
  }
}

export default BaseLayout;