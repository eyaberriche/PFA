import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MenuBar from "../../components/MenuBar";

function VisitorInterface(props) {
  const { Content, Header, Sider } = Layout;
  return (
    <div>
      <Layout className='layout'>
        <Header>
          <MenuBar name1='Se Connecter' page1='/login' />
        </Header>{" "}
      </Layout>
      <Layout>
        <Sider style={{ backgroundColor: "white" }}>
          sider
          <Outlet />
        </Sider>
      </Layout>
    </div>
  );
}

export default VisitorInterface;
