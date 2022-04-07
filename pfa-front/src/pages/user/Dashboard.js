import React, { useState } from "react";
import { Avatar, Layout, Image, Typography } from "antd";
import { Subnav } from "../../components/Subnav";
import MenuBar from "../../components/MenuBar";

import "../../components/constants/styles/Dashboard.css";
import { Buttons } from "../../components/constants/Buttons";

export function Dashboard(props) {
  const { Header } = Layout;
  const [update, setUpdate] = useState("Update");

  return (
    <>
      <Layout>
        <MenuBar
          name1='Logout'
          page1='/login'
          name3='dashboard'
          page3='/dashboard'
        />

        <Layout>
          <Subnav />

          <Layout style={{ padding: "0 24px 24px" }}>
            <>
              <div className='split left'>
                <div className='centered'>
                  <Avatar
                    width={500}
                    height={500}
                    src={<Image src='https://joeschmoe.io/api/v1/random' />}
                  />
                </div>
              </div>
              <div className='split right'>
                <div className='centered'>
                  <Typography.Title style={{ margin: 20 }}>
                    Mon Profil
                  </Typography.Title>
                  <h6>name</h6>
                  <Buttons name3={update} />
                </div>
              </div>
            </>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
