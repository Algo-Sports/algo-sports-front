import React, { Component } from 'react'
import { Bounce } from 'react-activity';
import 'react-activity/dist/react-activity.css';

class ListLoader extends Component {
  render() {
    return (
      <div className="min-height-30 padding-40 margin-auto text-align-center">
        <Bounce size={50} />
      </div>
    )
  }
}
export default ListLoader;