import React from "react";
import { Layout } from "antd";
import MenuBar from "../../components/MenuBar";

function UserInterface(props) {
  return (
    <div>
      <Layout className='layout'>
        <MenuBar />
      </Layout>
      <Layout>
        <p>welcome to home page</p>
      </Layout>
    </div>
  );
}

export default UserInterface;
