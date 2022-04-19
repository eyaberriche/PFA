import React, { useEffect, useState } from "react";
import { Col, Layout, Row, Typography } from "antd";
import MenuBar from "../../components/MenuBar";
import Categories from "../../components/Categories";
import { useParams } from "react-router-dom";
import {
  allFreelancersBycateg,
  categoryByid,
} from "../../services/visitorServices/categorie";
import { ThreeCircles } from "react-loader-spinner";

function FreelancersPage(props) {
  const { categorieId } = useParams();
  const cat = {
    _id: "",
    name: "",
    __v: 0,
  };
  const [freelancers, setFreelancers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(cat);

  useEffect(() => {
    getFreelancers(categorieId);
    getCategory(categorieId);
  }, [categorieId]);

  const getCategory = async (idc) => {
    const result = await categoryByid(idc);

    setCategory(result);
  };

  const getFreelancers = async (idd) => {
    const result = await allFreelancersBycateg(idd);

    setFreelancers(result);

    setLoading(false);
  };

  return (
    <Layout className='layout'>
      <MenuBar name1='Se Connecter' page1='/login' />

      <Layout>
        <Categories />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Typography.Title style={{ margin: 20 }}>
            Liste des freelance de la categorie {category.name}
          </Typography.Title>
          <div>
            {!loading ? (
              <div>
                {" "}
                {freelancers.map((user) => (
                  <>
                    {" "}
                    <p> {user.firstname} </p>
                    <p> {user.lastname} </p>
                    <p>{user.ispublic} </p>
                    <p>{user.email}</p>
                  </>
                ))}
              </div>
            ) : (
              <Row type='flex' justify='center'>
                <Col offset={6} span={12}>
                  <ThreeCircles
                    color='violet'
                    height={150}
                    width={150}
                    ariaLabel='three-circles-rotating'
                  />
                </Col>
              </Row>
            )}
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default FreelancersPage;
