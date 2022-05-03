import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { getCurrentUser, logout } from "../services/visitorServices/auth";
import {
  LogoutOutlined,
  DingtalkOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import axios from "axios";

function MenuBar(props) {
  const { Header } = Layout;
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getCurrentUser().then((response) => {
      setCurrentUser(response);
    });
  }, []);
  console.log(currentUser);
  const logOut = () => {
    logout();
  };
  return (
    <Header>
      <Menu mode='horizontal' theme='dark'>
        <Menu.Item key='2'>
          <Link to='/'>
            <DingtalkOutlined style={{ fontSize: "36px", color: "violet" }} />
          </Link>
        </Menu.Item>

        {currentUser ? (
          <>
            <Menu.Item key='4'>
              <Link to='/dashboard'>
                <BarsOutlined style={{ fontSize: "23px" }} />
              </Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/login' onClick={logOut}>
                <LogoutOutlined style={{ fontSize: "23px" }} />
              </Link>
            </Menu.Item>
          </>
        ) : (
          <Menu.Item key='5'>
            <Link to='/login'>Login</Link>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
}

export default MenuBar;
