import React from "react";
import { Layout, Menu } from "antd";
import { Link, NavLink } from "react-router-dom";

export function Subnav() {
  const { Sider } = Layout;

  return (
    <Sider className='site-layout-background'>
      <Menu theme='dark' mode='inline'>
        <Link to='/services' replace={true}>
          <Menu.Item key='1'>Services</Menu.Item>
        </Link>
        <Link to='/demandes' replace={true}>
          <Menu.Item key='2'>Demandes</Menu.Item>
        </Link>
      </Menu>
    </Sider>
  );
}
