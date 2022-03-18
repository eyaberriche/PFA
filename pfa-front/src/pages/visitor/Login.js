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
          <Content style={{ padding: "0 50px" }}>
            <Row justify='center' align='middle'>
              {" "}
              <Col span={12} style={{ backgroundColor: "red" }}>
                <Form
                  name='basic'
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 8,
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
              </Col>
            </Row>{" "}
          </Content>
        </Layout>
      </div>
    </Layout>
  );
}

export default Login;
