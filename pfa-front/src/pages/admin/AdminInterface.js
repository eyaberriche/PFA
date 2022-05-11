import { Card, Col, Layout, Pagination, Row, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import Categories from "../../components/Categories";
import MenuBar from "../../components/MenuBar";
import { ThreeCircles } from "react-loader-spinner";

function AdminInterface(props) {
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
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState(false);
  const [maxValue, setmaxValue] = useState(3);

  const handleChange = (value) => {
    if (value <= 1) {
      setminValue(0);
      setmaxValue(3);
    } else {
      setminValue(maxValue);
      setmaxValue(value * 3);
    }
  };
  return (
    <div>
      <Layout className='layout'>
        <MenuBar name1='Se Connecter' page1='/login' />

        <Layout style={{ minHeight: "600px" }}>
          <Categories />
          <Layout style={{ padding: "0 24px 24px" }}>
            {loading ? (
              <>
                <Typography.Title style={{ margin: 20 }}>
                  Les prestations déployés
                </Typography.Title>
                <div>
                  {" "}
                  <Row gutter={16}>
                    {data &&
                      data.slice(minValue, maxValue).map((val) => (
                        <Col span={8}>
                          <p></p>
                          <div>
                            <Card
                              title={val.title}
                              extra={<a href='#'>More</a>}
                              style={{ width: 320, minHeight: "260px" }}
                            >
                              <p>{val.value}</p>
                            </Card>
                          </div>
                        </Col>
                      ))}
                    <p>
                      <Pagination
                        defaultCurrent={1}
                        defaultPageSize={3}
                        onChange={handleChange}
                        total={data.length}
                      />
                    </p>
                  </Row>
                </div>
              </>
            ) : (
              <Row style={{ marginTop: "200px" }} type='flex' justify='center'>
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
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default AdminInterface;
