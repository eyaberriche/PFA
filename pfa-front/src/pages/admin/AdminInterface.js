import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
function AdminInterface(props) {
  return (
    <div>
      <Header
        name1='Logout'
        page1='/login'
        name2='users'
        page2=''
        name3=''
        page3=''
        name4=''
        page4=''
      />

      <Outlet />
    </div>
  );
}

export default AdminInterface;
