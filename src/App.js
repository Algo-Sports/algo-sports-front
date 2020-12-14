import React , {Component} from 'react';
import BaseLayout from './layouts/baseLayout'
import {Main} from './pages/main'

export class App extends Component {
  
  render() {
    return (
      <div>
          <BaseLayout>
            <Main/>
          </BaseLayout>
      </div>

    )
  }
}