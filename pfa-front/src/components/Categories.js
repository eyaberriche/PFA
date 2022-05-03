import { Button, Col, Layout, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { allCatgeories } from "../services/visitorServices/categorie";
import "./constants/styles/form.css";

function Categories(props) {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // setError(false)
      try {
        const cat = await allCatgeories();
        setCategories(cat);

        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const navigationLink = (c) => {
    navigate(`/categories/view/${c}`);
  };

  return (
    <Sider className='site-layout-background'>
      <Menu theme='dark' mode='inline'>
        {!loading ? (
          categories.map((categorie) => (
            <Menu.Item
              key={(Math.random() + 1).toString(36)}
              onClick={() => navigationLink(categorie._id)}
            >
              {categorie.name}
            </Menu.Item>
          ))
        ) : (
          <Row style={{ marginTop: "200px" }} justify='center'>
            <Col span={8}>
              <ThreeCircles
                color='violet'
                height={50}
                width={50}
                ariaLabel='three-circles-rotating'
              />
            </Col>
          </Row>
        )}
      </Menu>
    </Sider>
  );
}

export default Categories;
