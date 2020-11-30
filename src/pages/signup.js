import React, { Component } from 'react';
import NoNavLayout from '../layouts/noNavLayout'
import RegisterForm from '../forms/registerForm';
import SignInLayout from '../layouts/signInLayout';
import {Image} from 'antd';
import { Form, Input, Button, Radio } from 'antd';
import styles from '../styles/signin.module.css'

class SignUp extends Component {
  
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
              alt = "logo"
            />
          </div>
          <RegisterForm/>
        </SignInLayout>
      </NoNavLayout>
    )
  }
}

export default SignUp;