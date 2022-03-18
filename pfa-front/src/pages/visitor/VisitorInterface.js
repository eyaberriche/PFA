import React from "react";
import { Layout } from "antd";
import MenuBar from "../../components/MenuBar";
import Categories from "./Categories";

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
        <Categories />
        <Content />
      </Layout>
    </div>
  );
}

export default VisitorInterface;
