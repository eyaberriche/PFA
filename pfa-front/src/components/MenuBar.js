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
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    getCurrentUser().then((response) => {
      setCurrentUser(response);
      if (response.role === "admin") {
        setIsAdmin(true);
      } else if (response.role === "user") {
        setIsUser(true);
      }
    });
  }, []);
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

        {currentUser && isUser && (
          <>
            <Menu.Item key='44'>
              <Link to='/demandes'>
                <BarsOutlined style={{ fontSize: "23px" }} />
              </Link>
            </Menu.Item>
            <Menu.Item key='40'>
              <Link to='/demandes'>
                {currentUser.firstname} {currentUser.lastname}
              </Link>
            </Menu.Item>

            <Menu.Item key='3'>
              <Link to='/login' onClick={logOut}>
                <LogoutOutlined style={{ fontSize: "23px" }} />
              </Link>
            </Menu.Item>
          </>
        )}
        {currentUser && isAdmin && (
          <>
            <Menu.Item key='51'>
              <Link to='/dashboard'>Prestations</Link>
            </Menu.Item>
            <Menu.Item key='57'>
              <Link to='/dashboard'>Gestion des donnés</Link>
            </Menu.Item>
            <Menu.Item key='4'>
              <Link to='/dashboard'>
                {currentUser.firstname} {currentUser.lastname}
              </Link>
            </Menu.Item>

            <Menu.Item key='31'>
              <Link to='/login' onClick={logOut}>
                <LogoutOutlined style={{ fontSize: "23px" }} />
              </Link>
            </Menu.Item>
          </>
        )}
        {!currentUser && (
          <Menu.Item key='51'>
            <Link to='/login'>
              <LogoutOutlined style={{ fontSize: "23px" }} />
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
}

export default MenuBar;
