import React, { Component } from 'react';
import NoNavLayout from '../layouts/noNavLayout'
import SignInLayout from '../layouts/signInLayout';
import { Form, Input, Button} from 'antd';
import styles from '../styles/signin.module.css'
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { userActions } from '../_actions';
import { connect } from 'react-redux';

const FormWrapper = styled(Form)`
  padding: 10;
  text-align: center;
`;

class Signup extends Component {
  constructor(props) {
    super(props);
    
    // reset login status
    // this.props.signout();
    
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
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
    
    const { username, email, password1, password2} = this.state;
    if ( username && email && password1 && password2) {
      if(password1 === password2) {
        const response = this.props.signup(username, email, password1, password2);
        console.log(response);
      }
    }
  }

  render() {
    const {loggedIn} = this.props;
    const { username, email, password1, password2, submitted } = this.state;

    return (
      loggedIn?
      <Redirect to = "/"/>:
      <NoNavLayout>
        <SignInLayout>
          <div className={styles.logo}>
            <img
              src="/logo.png"
              style={{ padding: 5 }}
              alt="logo"
            />
          </div>
          <FormWrapper
            name = "form"
            onFinish = {this.handleSubmit}
          >
            <Form.Item label="유저명">
              <Input
                name="username"
                placeholder="유저명"
                required
                value={username}
                onChange={this.handleChange} />
            </Form.Item>
            <Form.Item label="이메일">
              <Input
                name="email"
                placeholder="이메일"
                required
                value={email}
                onChange={this.handleChange} />
            </Form.Item>
            <Form.Item label="비밀번호">
              <Input placeholder="비밀번호"
                type="password"
                name="password1"
                required
                value={password1}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item label="비밀번호 확인">
              <Input placeholder="비밀번호 확인"
                type="password"
                name="password2"
                required
                value={password2}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Button 
                  className={styles.submitButton}
                  disabled={submitted}
                  htmlType="submit"> 회원가입 </Button>
            </Form.Item>

            <hr />
            <Form.Item>
              <Link to="/signin">로그인</Link><br />
              <Link to="#">Sign up using Github</Link>
            </Form.Item>

          </FormWrapper>
        </SignInLayout>
      </NoNavLayout>
    )
  }
}

function mapState(state) {
  const { loggedIn } = state.authentication;
  return { loggedIn };
}

const actionCreators = {
  signup: userActions.signup,
};

const connectedSignin = connect(mapState, actionCreators)(Signup);
export { connectedSignin as Signup };