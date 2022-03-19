import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Layout } from "antd";
import MenuBar from "../../components/MenuBar";
function Login(props) {
  const { Content, Header } = Layout;
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    //alert(JSON.stringify(state));
  };
  return (
    <Layout className='layout'>
      <div>
        <Header>
          <MenuBar />
        </Header>
        <Layout>
          <Content
            className='site-layout-background'
            style={{
              padding: 110,
              margin: 0,
              minHeight: 540,
            }}
          >
            <Row style={{ minHeight: props.rowHeight }}>
              <Col
                justify='center'
                align='middle'
                span={11}
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",

                  borderRadius: "14px",
                }}
              >
                <p
                  style={{
                    minHeight: "90px",
                  }}
                >
                  {props.avatar}
                </p>
                <Form
                  name={props.nameform}
                  labelCol={{
                    span: 6,
                  }}
                  wrapperCol={{
                    span: 12,
                  }}
                >
                  <Form.Item
                    label='Email'
                    name='email'
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input
                      name='email'
                      value={state.email}
                      onChange={handleChange}
                    />
                  </Form.Item>

                  <Form.Item
                    label='Mot de passe'
                    name='password'
                    rules={[
                      {
                        required: true,
                        message: "Entrez votre mot de passe SVP!",
                      },
                    ]}
                  >
                    <Input.Password
                      name='password'
                      value={state.password}
                      onChange={handleChange}
                    />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 4,
                      span: 16,
                    }}
                  >
                    <Button type='submit'>connecter</Button>
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
