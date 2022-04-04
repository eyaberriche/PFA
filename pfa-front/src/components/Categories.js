import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import { NavLink } from "react-router-dom";

function Categories(props) {
  return (
    <div>
      <Sider>
        <Menu theme='dark' mode='inline'>
          <NavLink to='/services' replace={true}>
            <Menu.Item key='1'>Categorie 1</Menu.Item>
          </NavLink>
          <NavLink to='/demandes' replace={true}>
            <Menu.Item key='2'>catgeorie 2</Menu.Item>
          </NavLink>
          <NavLink to='/demandes' replace={true}>
            <Menu.Item key='3'>catgeorie 3</Menu.Item>
          </NavLink>
          <NavLink to='/demandes' replace={true}>
            <Menu.Item key='4'>catgeorie 4</Menu.Item>
          </NavLink>
        </Menu>
      </Sider>
    </div>
  );
}

export default Categories;
