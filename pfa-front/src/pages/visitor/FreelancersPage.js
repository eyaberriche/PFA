import React, { useEffect, useState } from "react";
import { Card, Col, Layout, Pagination, Row, Typography } from "antd";
import MenuBar from "../../components/MenuBar";
import Categories from "../../components/Categories";
import { useParams } from "react-router-dom";
import {
  allFreelancersBycateg,
  categoryByid,
} from "../../services/visitorServices/categorie";
import { ThreeCircles } from "react-loader-spinner";
import { getCurrentUser, logout } from "../../services/visitorServices/auth";

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
    setLoading(false);
  }, [categorieId]);

  const getCategory = async (idc) => {
    const result = await categoryByid(idc);

    setCategory(result);
  };

  const getFreelancers = async (idd) => {
    const result = await allFreelancersBycateg(idd);

    setFreelancers(result);
  };
  let data = [
    { title: "Card title1", value: "Card content1" },
    { title: "Card title2", value: "Card content2" },
    { title: "Card title3", value: "Card content3" },
    { title: "Card title4", value: "Card content4" },
    { title: "Card title5", value: "Card content5" },
    { title: "Card title6", value: "Card content6" },
    { title: "Card title7", value: "Card content7" },
    { title: "Card title8", value: "Card content8" },
    { title: "Card title9", value: "Card content9" },
    { title: "Card title10", value: "Card content10" },
    { title: "Card title11", value: "Card content11" },
    { title: "Card title12", value: "Card content12" },
    { title: "Card title13", value: "Card content13" },
    { title: "Card title14", value: "Card content14" },
    { title: "Card title15", value: "Card content15" },
  ];

  const [minValue, setminValue] = useState(0);

  const [maxValue, setmaxValue] = useState(6);

  const handleChange = (value) => {
    if (value <= 1) {
      setminValue(0);
      setmaxValue(6);
    } else {
      setminValue(maxValue);
      setmaxValue(value * 6);
    }
  };
  return (
    <div>
      <Layout className='layout'>
        <MenuBar />
        <Layout>
          <Categories />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Typography.Title style={{ margin: 20 }}>
              Bienvenue
            </Typography.Title>
            <div>
              {" "}
              <Row gutter={16}>
                {data &&
                  data.length > 0 &&
                  data.slice(minValue, maxValue).map((val) => (
                    <Col span={8}>
                      <p></p>
                      <div>
                        <Card
                          title={val.title}
                          extra={<a href='#'>More</a>}
                          style={{ width: 300 }}
                        >
                          <p>{val.value}</p>
                        </Card>
                      </div>
                    </Col>
                  ))}
                <p>
                  <Pagination
                    defaultCurrent={1}
                    defaultPageSize={6}
                    onChange={handleChange}
                    total={15}
                  />
                </p>
              </Row>
            </div>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default FreelancersPage;
