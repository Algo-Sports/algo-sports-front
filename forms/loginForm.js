import React, { useState, useCallback} from 'react';
import { Form, Input, Button, Row, Col  } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from '../styles/loginForm.module.css';

const ButtonWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const FormWrapper = styled(Form)`
  padding: 10;
  text-align: center;
`;

const LoginForm = ( { setIsLoggedIn } ) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback( (e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback((e) => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  const [form] = Form.useForm();

  return (
    <FormWrapper
      form={form}
    >
      <Form.Item label="이메일">
        <Input
          name = "user_email" 
          placeholder="이메일"
          required 
          value={id}
          onChange={onChangeId}/>
      </Form.Item>
      <Form.Item label="비밀번호">
        <Input placeholder="비밀번호"
        required
        value={password}
        onChange={onChangePassword}
      />
      </Form.Item>
      <Form.Item>
        <ButtonWrapper>
          <Button className = {styles.submitButton} htmlType="submit" loading={false} > 로그인 </Button>
        </ButtonWrapper>
      </Form.Item>

      <hr/>
      <Form.Item>
        <Link href="/signup"><a>회원가입</a></Link><br/>
        <Link href="/signup"><a>Sign up using Github</a></Link>
      </Form.Item>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
}

export default LoginForm;
