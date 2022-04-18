import { Button, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { allCatgeories } from "../services/visitorServices/categorie";
import "./constants/styles/form.css";

function Categories(props) {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const result = await allCatgeories();

    setCategories(result);
  };
  const navigationLink = (c) => {
    navigate(`/categories/view/${c}`);
  };
  console.log(JSON.stringify(categories));
  return (
    <Sider className='site-layout-background'>
      <Menu theme='dark' mode='inline'>
        {categories.map((categorie) => (
          <Menu.Item onClick={() => navigationLink(categorie._id)}>
            {categorie.name}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default Categories;
