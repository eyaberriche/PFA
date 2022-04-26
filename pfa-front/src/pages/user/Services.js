import React, { useState } from "react";
import { Tables } from "../../components/constants/Tables";
import { Layout, Space, Typography } from "antd";
import { Buttons } from "../../components/constants/Buttons";
import MenuBar from "../../components/MenuBar";
import { Subnav } from "../../components/Subnav";

export function Services(props) {
  const [show, setShow] = useState("Show");
  const [update, setUpdate] = useState("Update");
  const [delet, setDelet] = useState("Delete");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 150,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size='middle'>
          <Buttons name1={show} />
          <Buttons name3={update} />
          <Buttons name4={delet} />
        </Space>
      ),
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <Layout>
      <MenuBar />
      <Layout>
        <Subnav />

        <Layout style={{ padding: "0 24px 24px" }}>
          <Typography.Title style={{ margin: 20 }}>
            Mes services
          </Typography.Title>

          <Tables name={columns} data={data} />
        </Layout>
      </Layout>
    </Layout>
  );
}
