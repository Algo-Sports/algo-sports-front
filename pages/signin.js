import React, { Component } from 'react';
import NoNavLayout from './layouts/NoNavLayout'
import LoginForm from '../forms/loginForm';
import SignInLayout from './layouts/signInLayout';
import {Image} from 'antd';

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NoNavLayout>
        <SignInLayout>
          <Image className="logo"
            src = "/logo.png"
          />
          <LoginForm setIsLoggedIn = {this.props.setIsLoggedIn}/>
        </SignInLayout>
      </NoNavLayout>
    )
  }
}

export default SignIn;