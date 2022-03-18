import React from "react";
import "../../components/styles/forms.css";
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
            <div className='formCenter' style={{ width: "600px" }}>
              <form
                className='formFields'
                style={{ backgroundColor: " rgba(255, 255, 255, 0.4)" }}
              >
                <div className='formField'>
                  <label className='formFieldLabel' htmlFor='email'>
                    E-Mail Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='formFieldInput'
                    placeholder='Enter your email'
                    name='email'
                  />
                </div>

                <div className='formField'>
                  <label className='formFieldLabel' htmlFor='password'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    className='formFieldInput'
                    placeholder='Enter your password'
                    name='password'
                  />
                </div>

                <div className='formField'>
                  <button className='formFieldButton'>Sign In</button>{" "}
                  <Link to='/register' className='formFieldLink'>
                    Create an account
                  </Link>
                </div>
              </form>
            </div>
          </Content>
        </Layout>
      </div>
    </Layout>
  );
}

export default Login;
