import React from "react";
import { Layout } from "antd";
import MenuBar from "../../components/MenuBar";
import Categories from "../../components/Categories";

function VisitorInterface(props) {
  const { Content, Header } = Layout;
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
