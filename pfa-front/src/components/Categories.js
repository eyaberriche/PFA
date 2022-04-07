import { Button, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { allCatgeories } from "../services/visitorServices/categorie";
import "./constants/styles/form.css";

function Categories(props) {
  const { Sider } = Layout;

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const result = await allCatgeories();

    setCategories(result);
  };

  console.log(JSON.stringify(categories));
  return (
    <Sider className='site-layout-background'>
      <Menu theme='dark' mode='inline'>
        {categories.map((categorie, index) => (
          <Link to={`/categories/view/${categorie._id}`}>
            <Menu.Item>{categorie.name}</Menu.Item>
          </Link>
        ))}
      </Menu>
    </Sider>
  );
}

export default Categories;
