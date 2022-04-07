import React from "react";
import { Layout } from "antd";
import MenuBar from "../../components/MenuBar";

function UserInterface(props) {
  return (
    <div>
      <Layout className='layout'>
        <MenuBar
          name1='Logout'
          page1='/login'
          name3='dashboard'
          page3='/dashboard'
        />
      </Layout>
      <Layout>
        <p>welcome to home page</p>
      </Layout>
    </div>
  );
}

export default UserInterface;
