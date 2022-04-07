import React from "react";
import { Layout, Typography } from "antd";
import MenuBar from "../../components/MenuBar";
import Categories from "../../components/Categories";

function VisitorInterface(props) {
  return (
    <div>
      <Layout className='layout'>
        <MenuBar name1='Se Connecter' page1='/login' />

        <Layout>
          <Categories />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Typography.Title style={{ margin: 20 }}>
              Bienvenue
            </Typography.Title>
            <div>hiofhefhhfhhefhùfeùhefùhfeùùfeùhfhfeùhefù</div>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default VisitorInterface;
