import React ,{useState}  from 'react';
import { Tables } from '../../components/Tables';
import { Layout, Space, Typography } from 'antd';
import { Buttons } from '../../components/Buttons';
import { Header } from 'antd/lib/layout/layout';
import MenuBar from '../../components/MenuBar';
import { Subnav } from '../../components/Subnav';


export  function Demandes(props){
    const [show,setShow]=useState('Show');
    const [update,setUpdate]=useState('Update');
    const [delet, setDelet]=useState('Delete')

        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              width: 150,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              width: 150,
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                  <Space size="middle">
                    <Buttons name1={show}/>
                    <Buttons name3={update}/>
                    <Buttons name4={delet}/>

                  </Space>
                ),
            }
           
          ];
          const data = [];
          for (let i = 0; i < 100; i++) {
            data.push({
              key: i,
              name: `Edward King ${i}`,
              age: 32,
              
            });
          }
        return(

         
            <Layout>
                    <Header className="header">
                    <MenuBar name1='Logout' page1='/login' name3='dashboard' page3='/dashboard' />
                    </Header>
                    <Layout>
                        <Subnav/>
    
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Typography.Title  style={{ margin: 20 }}>
                                        Mes demandes
                            </Typography.Title>
                            <Tables name={columns} data={data}/>    
                        </Layout>
                    </Layout>
            </Layout>
  
     
        );
    }
    
