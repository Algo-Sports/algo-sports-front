import React, { Component } from 'react';
import NoNavLayout from '../layouts/noNavLayout'
import SignInLayout from '../layouts/signInLayout';
import { Form, Input, Button, Alert} from 'antd';
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
      complete: '',
      status : {
        username: "success",
        email: "success",
        password1: "success",
        password2: "success",
      },
      error: {
        username: "",
        email: "",
        password1: "",
        password2: "",
        default: "",
      },
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

  async handleSubmit() {
    this.setState({
      ...this.state,
      submitted: true,
      status : {
        username: "success",
        email: "success",
        password1: "success",
        password2: "success",
      },
      error: {
        username: "",
        email: "",
        password1: "",
        password2: "",
        default: "",
      },
    });
    
    const { username, email, password1, password2} = this.state;
    const { alert, message } = this.props;

    if ( username && email && password1 && password2) {
      if(password1 === password2) {
        await this.props.signup(username, email, password1, password2);
        if(alert) {
          if(alert.type!== "undefined" && alert.type === "alert-success") {
            this.setState({
              complete: true,            
              submitted : true,
            })
            return;
          }
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
                  password1: "error",
                },
                error: {
                  ...this.state.error,
                  password1: message.non_field_errors[0],
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

            if(message.username!== "undefined" && message.username) {
              this.setState({
                ...this.state,
                status: {
                  ...this.state.status,
                  username: "error",
                },
                error: {
                  ...this.state.error,
                  username: message.username[0],
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
      else {
        this.setState({
          ...this.state,
          submitted : false,
          status: {
            ...this.state.status,
            password2: "error",
          },
          error: {
            ...this.state.error,
            password2: "비밀번호가 다릅니다."
          }
        })
      }
    }
  }

  render() {
    const {loggedIn, message } = this.props;
    const { username, email, password1, password2, submitted, complete } = this.state;
    
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
                alt="logo"
              />
            </div>
          </Link>
          
          <FormWrapper
            name = "form"
            onFinish = {this.handleSubmit}
          >
            <Form.Item
              label="유저명"
              validatestatus = {this.state.status.username}
              help = {this.state.error.username}
            >
              <Input
                name="username"
                placeholder="유저명"
                required
                value={username}
                onChange={this.handleChange} />
            </Form.Item>
            <Form.Item
              label="이메일"
              validatestatus = {this.state.status.email}
              help = {this.state.error.email}
            >
              <Input
                name="email"
                placeholder="이메일"
                required
                value={email}
                onChange={this.handleChange} />
            </Form.Item>
            <Form.Item
              label="비밀번호"
              validatestatus = {this.state.status.password1}
              help = {this.state.error.password1}
            >
              <Input placeholder="비밀번호"
                type="password"
                name="password1"
                required
                value={password1}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item
              label="비밀번호 확인"
              validatestatus = {this.state.status.password2}
              help = {this.state.error.password2}
            >
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
            {complete?
            <Alert
                message = {message}
                type="success"
                showIcon
                action={
                  <Button size="small" type="text">
                    UNDO
                  </Button>
                }
                closable
              /> : <></>
            }
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
  const { alert } = state;
  const {message} = alert;
  return { loggedIn, alert, message };
}

const actionCreators = {
  signup: userActions.signup,
};

const connectedSignin = connect(mapState, actionCreators)(Signup);
export { connectedSignin as Signup };