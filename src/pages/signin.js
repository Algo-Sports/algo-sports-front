import React, { Component } from 'react';
import NoNavLayout from '../layouts/noNavLayout'
import SignInLayout from '../layouts/signInLayout';
import { Form, Input, Button, Label, Radio } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../styles/signin.module.css'
import { userActions } from '../_actions';
import { connect } from 'react-redux';

const ButtonWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const FormWrapper = styled(Form)`
  padding: 10;
  text-align: center;
`;

class Signin extends Component {
  constructor(props) {
    super(props);
    
    // reset login status
    this.props.signout();
    
    this.state = {
      email: '',
      password: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    this.setState({ submitted: true });
    
    const { email, password } = this.state;
    if (email && password) {
      this.props.signin(email, password);
    }
  }
  render() {
    const { loggingIn } = this.props;
    const { password, email, submitted } = this.state;

    return (
      <NoNavLayout>
        <SignInLayout>
          <div className={styles.logo}>
            <img
              src="/logo.png"
              style={{ padding: 5 }}
            />
          </div>
          <FormWrapper
            name="form"
            onFinish={this.handleSubmit}
          >
            <Form.Item label="Email">
              <Input
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={this.handleChange} />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                type="password"
                placeholder="Password"
                name="password"
                required
                value={password}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
                <Button
                  className={styles.submitButton}
                  disabled={loggingIn}
                  htmlType="submit"
                >
                  로그인
                </Button>
            </Form.Item>

            <hr />
            <Form.Item>
              <Link to="/signup">회원가입</Link><br />
              <Link to="/signup">Sign up using Github</Link>
            </Form.Item>
          </FormWrapper>
        </SignInLayout>
      </NoNavLayout>
    )
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  signin: userActions.signin,
  signout: userActions.signout
};

const connectedSignin = connect(mapState, actionCreators)(Signin);
export { connectedSignin as Signin };