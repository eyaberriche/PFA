import { Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { allCatgeories } from "../services/visitorServices/categorie";

function Categories(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const result = await allCatgeories();

    setCategories(result.data);
  };

  console.log(JSON.stringify(categories));
  return (
    <div>
      <Sider>
        <Menu theme='dark' mode='inline'>
          {categories.map((categorie) => (
            <NavLink to='/' replace={true}>
              <Menu.Item key={Math.random()}>{categorie.name}</Menu.Item>
            </NavLink>
          ))}
        </Menu>
      </Sider>
    </div>
  );
}

export default Categories;
