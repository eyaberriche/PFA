import React from "react";
import { Form, Button, Input, Select, Row, Col, Layout } from "antd";
import MenuBar from "../../components/MenuBar";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Content, Header } = Layout;
function Register(props) {
  return (
    <Layout className='layout'>
      <div>
        <Header>
          <MenuBar />
        </Header>
        <Layout>
          <Content
            style={{
              padding: 125,
              backgroundImage: "url('bg.png')",
              backgroundSize: "115%",

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
                    }}
                  />
                </p>

                <p
                  style={{
                    minHeight: "20px",
                  }}
                >
                  <h3 style={{ color: "white" }}> Inscrivez vous </h3>
                </p>
                <Form
                  autoComplete='off'
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 12 }}
                  onFinish={(values) => {
                    console.log({ values });
                  }}
                  onFinishFailed={(error) => {
                    console.log({ error });
                  }}
                >
                  <Form.Item
                    name='firstname'
                    label='Prénom'
                    rules={[
                      {
                        required: true,
                        message: "Tapez votre nom SVP !",
                      },
                      { whitespace: true },
                      { min: 3 },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder='Entrez votre prénom' />
                  </Form.Item>
                  <Form.Item
                    name='lastname'
                    label='nom'
                    rules={[
                      {
                        required: true,
                        message: "Tapez votre nom SVP !",
                      },
                      { whitespace: true },
                      { min: 3 },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder='Entrez votre nom' />
                  </Form.Item>

                  <Form.Item
                    name='email'
                    label='Email'
                    rules={[
                      {
                        required: true,
                        message: "Entrez votre email SVP !",
                      },
                      { type: "email", message: "Entrez un valid email SVP !" },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder='Tapez votre email' />
                  </Form.Item>

                  <Form.Item
                    name='password'
                    label='Mot de passe'
                    rules={[
                      {
                        required: true,
                        message: "Entrez votre mot de passe SVP !",
                      },
                      { min: 6 },
                      {
                        validator: (_, value) =>
                          value && value.includes("A")
                            ? Promise.resolve()
                            : Promise.reject(
                                "Password does not match criteria."
                              ),
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password placeholder='Tapez votre mot de passe' />
                  </Form.Item>

                  <Form.Item
                    name='confirmPassword'
                    label='Confirmez '
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "The two passwords that you entered does not match."
                          );
                        },
                      }),
                    ]}
                    hasFeedback
                  >
                    <Input.Password placeholder='Confirmez votre mot de passe' />
                  </Form.Item>

                  <Form.Item
                    name='gender'
                    label='Genre'
                    requiredMark='optional'
                  >
                    <Select placeholder='Selectionnez votre sexe'>
                      <Select.Option value='male'>Homme</Select.Option>
                      <Select.Option value='female'>Femme</Select.Option>
                    </Select>
                  </Form.Item>

                  {/*  <Form.Item
                    name='dob'
                    label='Date of Birth'
                    rules={[
                      {
                        required: true,
                        message: "Please provide your date of birth",
                      },
                    ]}
                    hasFeedback
                  >
                    <DatePicker
                      style={{ width: "100%" }}
                      picker='date'
                      placeholder='Chose date of birth'
                    />
                  </Form.Item> */}

                  {/*  <Form.Item
                    name='agreement'
                    wrapperCol={{ span: 24 }}
                    valuePropName='checked'
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                "To proceed, you need to agree with our terms and conditions"
                              ),
                      },
                    ]}
                  >
                    
                  </Form.Item> */}

                  <Form.Item wrapperCol={{ span: 24 }}>
                    <Button block className='boutton' htmlType='submit'>
                      Inscrir
                    </Button>
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{ span: 24 }}
                    labelCol={{ span: 15 }}
                    label='Vous avez déja un compte ?'
                  >
                    <Button className='link'>
                      <Link to='/login'>Se connecter</Link>
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

export default Register;
