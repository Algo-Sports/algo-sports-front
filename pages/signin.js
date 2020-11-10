import React, { Component } from 'react';
import NoNavLayout from './layouts/NoNavLayout'
import LoginForm from '../forms/loginForm';
import SignInLayout from './layouts/signInLayout';
import {Image} from 'antd';
import { Form, Input, Button, Radio } from 'antd';
import styles from '../styles/signin.module.css'

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NoNavLayout>
        <SignInLayout>
          <div className={styles.logo}>
            <img
              src = "/logo.png"
              style={{padding: 5}}
            />
          </div>
          <LoginForm setIsLoggedIn = {this.props.setIsLoggedIn}/>
        </SignInLayout>
      </NoNavLayout>
    )
  }
}

export default SignIn;