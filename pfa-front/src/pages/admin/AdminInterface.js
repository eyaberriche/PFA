import { Layout } from "antd";
import React from "react";

import MenuBar from "../../components/MenuBar";
import Categories from "../../components/Categories";
function AdminInterface(props) {
  const { Header } = Layout;

  return (
    <div>
      <Layout>
        <Header>
          <MenuBar name1='Logout' page1='/login' name2='users' page2='/users' />
        </Header>

        <Categories />
      </Layout>{" "}
    </div>
  );
}

export default AdminInterface;
