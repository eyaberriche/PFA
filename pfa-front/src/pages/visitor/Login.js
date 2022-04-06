import React, { useState } from "react";
import { Form, Button, Input, Row, Col, Layout, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../../components/styles/form.css";

import MenuBar from "../../components/MenuBar";
import { Link } from "react-router-dom";
import login from "../../services/visitorServices/auth";
import axios from "axios";
import { useForm } from "antd/lib/form/Form";
function Login(props) {
  const { Content, Header } = Layout;

  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(JSON.stringify(state));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: state.email,
      password: state.password,
    };
    alert(JSON.stringify(data));
    login({
      email: data.email,
      password: data.password,
    });
  };
  return (
    <Layout className='layout'>
      <div>
        <Header>
          <MenuBar />
        </Header>
        <Layout>
          <Content
            style={{
              padding: 140,
              backgroundImage: "url('/bg.png')",
              backgroundSize: "cover",

              margin: 0,
              minHeight: 560,
            }}
          >
            <Row>
              <Col
                justify='center'
                align='middle'
                span={9}
                pull={2}
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",

                  borderRadius: "14px",
                }}
              >
                <p>
                  <UserOutlined
                    style={{
                      color: "#ff2d9b",
                      backgroundColor: "white",
                      fontSize: "350%",
                      background: "rounded",
                    }}
                  />
                </p>

                <Typography
                  style={{
                    minHeight: "20px",
                  }}
                >
                  <h4 style={{ color: "white" }}> Se connecter </h4>
                </Typography>
                <Form
                  autoComplete='off'
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}
                >
                  <Form.Item
                    name='email'
                    label='Email'
                    style={{
                      color: "white !important",
                    }}
                    rules={[
                      {
                        required: true,
                        message: "Entrez votre email SVP !",
                      },
                      { type: "email", message: "Entrez un valid Email svp !" },
                    ]}
                    hasFeedback
                  >
                    <Input
                      name='email'
                      onChange={handleChange}
                      placeholder='Tapez votre email'
                    />
                  </Form.Item>

                  <Form.Item
                    name='password'
                    label='Password'
                    rules={[
                      {
                        required: true,
                        message: "Entrez votre mot de passe svp!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      name='password'
                      onChange={handleChange}
                      placeholder='Tapez votre mot de passe '
                    />
                  </Form.Item>

                  <Form.Item wrapperCol={{ span: 24 }}>
                    <Button
                      className='boutton'
                      block
                      type='primary'
                      htmlType='submit'
                      onClick={onSubmit}
                    >
                      Se connecter
                    </Button>
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{ span: 24 }}
                    labelCol={{ span: 15 }}
                    label="Vous n'avez pas un compte ?"
                  >
                    <Button className='link'>
                      <Link to='/register'>S'inscrir</Link>
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    </Layout>
  );
}

export default Login;
