import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

import MenuBar from "../../components/MenuBar";
function AdminInterface(props) {
  const { Content, Header } = Layout;
  return (
    <div>
      <Layout>
        <Header>
          <MenuBar name1='Logout' page1='/login' name2='users' page2='/users' />
        </Header>

        <Outlet />
      </Layout>{" "}
    </div>
  );
}

export default AdminInterface;
