import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import { Layout, Breadcrumb } from "antd";

const { Content, Header } = Layout;
function Register(props) {
  return (
    <div>
      <Header>
        <MenuBar />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className='site-layout-content'>Content</div>
      </Content>
      <button>
        <Link to='/login'>login</Link>
      </button>
    </div>
  );
}

export default Register;
