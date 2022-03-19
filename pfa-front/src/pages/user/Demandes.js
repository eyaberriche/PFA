import React ,{useState}  from 'react';
import { Tables } from '../../components/Tables';
import { Space,Layout, Typography } from 'antd';
import MenuBar from "../../components/MenuBar";
import { Buttons } from '../../components/Buttons';


export  function Demandes(props){
    const { Content, Header } = Layout;
    const [show,setShow]=useState('Show');
    const [add,setAdd]=useState('Add');
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
                    <Buttons name2={add}/>
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

            <Layout className='layout'>
      
            <Header>
            <MenuBar name1='Logout' page1='/login' name3='Mes services' page3='/services' name4='Mes demandes' page4='/demandes'   />
          </Header>
          <Layout>
            <Content
              className='site-layout-background'
              style={{
                padding: -10,
                margin: 0,
                minHeight: 580,
              }}
            >
        <Typography.Title  style={{ margin: 20 }}>
            Mes demandes
        </Typography.Title>
          <Tables name={columns} data={data}/>    
  
            </Content>
  
            </Layout>
            </Layout>  
           
        );
    }
    

