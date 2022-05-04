import React, { useState } from "react";
import { Col, Layout, Row, Typography } from "antd";
import MenuBar from "../../components/MenuBar";
import Categories from "../../components/Categories";

import { Content } from "antd/lib/layout/layout";

function VisitorInterface(props) {
  return (
    <div>
      <Layout className='layout'>
        <MenuBar />
        <Layout
          style={{
            minHeight: 690,
          }}
        >
          <Categories />
          <Layout style={{ padding: "0 4px 4px" }}>
            <Content
              style={{
                padding: 40,
                backgroundImage: "url('/32197.jpg')",
                backgroundSize: "85%",

                margin: 0,
                maxHeight: 590,
              }}
            />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default VisitorInterface;
