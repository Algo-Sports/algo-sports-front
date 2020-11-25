import React, { useState, useCallback } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import {Link} from 'react-router-dom';
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

const RegisterForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onChangeRePassword = useCallback((e) => {
    setRePassword(e.target.value);
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
          name="user_email"
          placeholder="이메일"
          required
          value={id}
          onChange={onChangeId} />
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
          <Button className={styles.submitButton} htmlType="submit" loading={false} > 회원가입 </Button>
        </ButtonWrapper>
      </Form.Item>

      <hr />
      <Form.Item>
        <Link to="/signin">로그인</Link><br />
        <Link to="#">Sign up using Github</Link>
      </Form.Item>
    </FormWrapper>
  );
};

RegisterForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
}

export default RegisterForm;
