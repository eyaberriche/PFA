import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Row, Col, Layout } from "antd";
import MenuBar from "../../components/MenuBar";
function Login(props) {
  const { Content, Header } = Layout;
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
              padding: 150,
              margin: 0,
              minHeight: 580,
            }}
          >
            <Row span={20} justify='center' align='middle'>
              <Col
                span={12}
                style={{
                  alignContent: "center",
                  backgroundColor: "red",
                  minHeight: 280,
                }}
              >
                <div className='login-warp'>
                  <Form
                    name='basic'
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 10,
                    }}
                  >
                    <Form.Item
                      label='Username'
                      name='username'
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label='Password'
                      name='password'
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type='primary' htmlType='submit'>
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>{" "}
                  <button>
                    <Link to='/register'>register</Link>
                  </button>
                </div>
              </Col>
            </Row>{" "}
          </Content>
        </Layout>
      </div>
    </Layout>
  );
}

export default Login;
