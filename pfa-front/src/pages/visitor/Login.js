import React, { useState } from "react";
import { Form, Button, Input, Row, Col, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../../components/styles/form.css";

import MenuBar from "../../components/MenuBar";

// couleur rose #ff2d9b
//import login from "../../services/visitorServices/auth";
function Login(props) {
  const { Content, Header } = Layout;
  /* const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  const handleSubmitClick = (e) => {
    e.preventDefault();
    const data = {
      email: state.email,
      password: state.password,
    };
    alert(JSON.stringify(data));
    /* login(data).then(
      () => {
        props.history.push("/admin");
        //window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    //alert(JSON.stringify(state));
  };*/
  return (
    <Layout className='layout'>
      <div>
        <Header>
          <MenuBar />
        </Header>
        <Layout>
          <Content
            style={{
              padding: 170,
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

                <p
                  style={{
                    minHeight: "20px",
                  }}
                >
                  <h3 style={{ color: "white" }}> Se connecter </h3>
                </p>
                <Form
                  autoComplete='off'
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}
                  onFinish={(values) => {
                    console.log({ values });
                  }}
                  onFinishFailed={(error) => {
                    console.log({ error });
                  }}
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
                      { type: "email", message: "Entrez un valid Email !" },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder='Type your email' />
                  </Form.Item>

                  <Form.Item
                    name='password'
                    label='Password'
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password placeholder='Tapez votre mot de passe SVP !' />
                  </Form.Item>

                  <Form.Item wrapperCol={{ span: 24 }}>
                    <Button
                      className='boutton'
                      block
                      type='primary'
                      htmlType='submit'
                    >
                      Se connecter
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
