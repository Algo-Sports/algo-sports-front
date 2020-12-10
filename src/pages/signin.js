import React, { Component } from 'react';
import NoNavLayout from '../layouts/noNavLayout'
import SignInLayout from '../layouts/signInLayout';
import { Form, Input, Button} from 'antd';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../styles/signin.module.css'
import { userActions } from '../_actions';
import { connect } from 'react-redux';

const FormWrapper = styled(Form)`
  padding: 10;
  text-align: center;
`;

class Signin extends Component {
  constructor(props) {
    super(props);
    
    // reset login status
    // this.props.signout();
    
    this.state = {
      status : {
        email: "success",
        password: "success",
      },
      error: {
        email: "",
        password: "",
        default: "",
      },
      email: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    this.setState({
      ...this.state,
      submitted: true, 
      status : {
        email: "success",
        password: "success",
      },
      error: {
        email: "",
        password: "",
        default: "",
      }
    });
    
    const { email, password } = this.state;
    const { alert, message} = this.props;
    
    if (email && password) {
      await this.props.signin(email, password);
      
      if(alert) {
        this.setState({
          ...this.state,
          submitted : false,
        })
        try {
          if(message.non_field_errors!== "undefined" && message.non_field_errors) {
            this.setState({
              ...this.state,
              status: {
                ...this.state.status,
                password: "error",
              },
              error: {
                ...this.state.error,
                password: message.non_field_errors[0],
              }
            })
          }
  
          if(message.email!== "undefined" && message.email) {
            this.setState({
              ...this.state,
              status: {
                ...this.state.status,
                email: "error",
              },
              error: {
                ...this.state.error,
                email: message.email[0],
              }
            })
          }
        }
        catch {
          this.setState({
            ...this.state,
            status: {
              ...this.state.status,
              password: "error",
            },
            error: {
              ...this.state.error,
              password: "알 수 없는 오류가 발생하였습니다."
            }
          })
        }
      }
    }
  }
  render() {
    const {loggedIn} = this.props;
    const { password, email, submitted } = this.state;

    /* TOKEN REFRESH LOGIC */


    return (
      loggedIn?
      <Redirect to = "/"/>:
      <NoNavLayout>
        <SignInLayout>
          <Link to = "/">
            <div className={styles.logo}>
              <img
                src="/logo.png"
                className = "padding-5"
                alt = "Logo"
              />
            </div>
          </Link>
          <FormWrapper
            name="form"
            onFinish={this.handleSubmit}
          >
            <Form.Item 
              label="Email"
              validatestatus = {this.state.status.email}
              help = {this.state.error.email}
            >
              <Input
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={this.handleChange} />
            </Form.Item>
            <Form.Item 
              label="password"
              validatestatus = {this.state.status.password}
              help = {this.state.error.password}
            >
              <Input
                type="password"
                placeholder="password"
                name="password"
                required
                value={password}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
                <Button
                  className={styles.submitButton}
                  disabled={submitted}
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
  const { loggedIn } = state.authentication;
  const { alert } = state;
  const {message} = alert;
  return { loggedIn, alert, message };
}

const actionCreators = {
  signin: userActions.signin,
  signout: userActions.signout
};

const connectedSignin = connect(mapState, actionCreators)(Signin);
export { connectedSignin as Signin };