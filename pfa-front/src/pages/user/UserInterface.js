import React from "react";
import { Layout } from "antd";
import MenuBar from "../../components/MenuBar";


 function UserInterface(props) {
  const {  Header} = Layout;
  return (
    <div>
      <Layout className='layout'>
        <Header>
        <MenuBar name1='Logout' page1='/login' name3='dashboard' page3='/dashboard' />
        </Header>{" "}
      </Layout>
      <Layout>
      <p>welcome to home page</p>  
      </Layout>
    </div>
  );
}

export default UserInterface;
