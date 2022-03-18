import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function MenuBar(props) {
  return (
    <div>
      <Menu mode='horizontal' theme='dark'>
        <Menu.Item key='home'>
          <Link to='/'>Logo</Link>
        </Menu.Item>
        {props.name1 && props.page1 ? (
          <Menu.Item key={Math.random(1)}>
            <Link to={props.page1}>{props.name1}</Link>
          </Menu.Item>
        ) : (
          ""
        )}
        {props.name2 && props.page2 ? (
          <Menu.Item key={Math.random(1)}>
            <Link to={props.page2}>{props.name2}</Link>
          </Menu.Item>
        ) : (
          ""
        )}
        {props.name3 && props.page3 ? (
          <Menu.Item key={Math.random(1)}>
            <Link to={props.page3}>{props.name3}</Link>
          </Menu.Item>
        ) : (
          ""
        )}
        {props.name4 && props.page4 ? (
          <Menu.Item key={Math.random(1)}>
            <Link to={props.page4}>{props.name4}</Link>
          </Menu.Item>
        ) : (
          ""
        )}
      </Menu>
    </div>
  );
}

export default MenuBar;
