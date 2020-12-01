import React, { useState, useCallback } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button} from 'antd';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import styles from '../styles/signin.module.css';

// import { signup } from "../actions/auth";

const ButtonWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const FormWrapper = styled(Form)`
  padding: 10;
  text-align: center;
`;

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  // const [success, setSuccess] = useState(false);

  
  // const { message } = useSelector(state => state.message);
  // const dispatch = useDispatch();

  const onChangeUsername = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onChangeRePassword = useCallback((e) => {
    setRePassword(e.target.value);
  }, []);


  const onSubmitForm = (e) => {
    e.preventDefault();
    // setSuccess(false);
    // dispatch(signup(username, email, password, rePassword)).then(()=>{
    //   setSuccess(true);
    // })
    // .catch(()=>{
    //   setSuccess(false);
    // })

  };

  const [form] = Form.useForm();

  return (
    <FormWrapper
      form={form}
    >
      <Form.Item label="유저명">
        <Input
          name="username"
          placeholder="유저명"
          required
          value={username}
          onChange={onChangeUsername} />
      </Form.Item>
      <Form.Item label="이메일">
        <Input
          name="user_email"
          placeholder="이메일"
          required
          value={email}
          onChange={onChangeEmail} />
      </Form.Item>
      <Form.Item label="비밀번호">
        <Input placeholder="비밀번호"
          type="password"
          required
          value={password}
          onChange={onChangePassword}
        />
      </Form.Item>
      <Form.Item label="비밀번호 확인">
        <Input placeholder="비밀번호 확인"
          type="password"
          required
          value={rePassword}
          onChange={onChangeRePassword}
          />
      </Form.Item>
      <Form.Item>
        <ButtonWrapper>
          <Button className={styles.submitButton} htmlType="submit" loading={false} onClick = {onSubmitForm}> 회원가입 </Button>
        </ButtonWrapper>
      </Form.Item>

      <hr />
      <Form.Item>
        <Link to="/signin">로그인</Link><br />
        <Link to="#">Sign up using Github</Link>
      </Form.Item>
      
      {/* {message && (
        <div className="form-group">
          <div className={ success ? "alert alert-success" : "alert alert-danger" } role="alert">
            {message}
          </div>
        </div>
      )} */}
    </FormWrapper>
  );
};

export default RegisterForm;
