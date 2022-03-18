import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function VisitorInterface(props) {
  return (
    <div>
      <Header
        name1='Se Connecter'
        page1='/login'
        name2=''
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

export default VisitorInterface;
