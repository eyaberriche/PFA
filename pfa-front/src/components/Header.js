import React, { useState } from "react";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key='home'>
          <Link to='/'>Logo</Link>
        </Menu.Item>
        <Menu.Item key={Math.random(1)}>
          <Link to={props.page1}>{props.name1}</Link>
        </Menu.Item>

        <Menu.Item key={Math.random(1)}>
          <Link to={props.page2}>{props.name2}</Link>
        </Menu.Item>
        <Menu.Item key={Math.random(1)}>
          <Link to={props.page3}>{props.name3}</Link>
        </Menu.Item>
        <Menu.Item key={Math.random(1)}>
          <Link to={props.page4}>{props.name4}</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
