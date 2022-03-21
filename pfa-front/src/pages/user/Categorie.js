import React , { useState , useEffect}  from 'react';
import { Tables } from '../../components/Tables';
import { Layout, Space,Typography} from 'antd';
import { Buttons } from '../../components/Buttons';
import { Header } from 'antd/lib/layout/layout';
import MenuBar from '../../components/MenuBar';
import { Subnav } from '../../components/Subnav';
import axios from 'axios'
export  function Categorie (props){

      const [show,setShow]=useState('Show');
      const [update,setUpdate]=useState('Update');
      const [delet, setDelet]=useState('Delete')
      const [categories,setCategories]=useState([])
     
     




      

const GetCategories = ()=>{
    axios.get('http://localhost:5000/category/all')
    .then(res => {
        this.useState({ data: res.data });
      })

  
    .catch(err=>console.log("Error",err))
}

useEffect(()=>{
    GetCategories();
  
})
        const columns = [
            {
              title: 'Nom',
              dataIndex: 'name',
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

          const datasource = []
         /* const datasource = 
          {data.cat.map((orderItem) => {
          return (
            [
                {
                  key: {orderItem.id},
                 
                  name:{orderItem.name},
                 
                  
                },
             
        ])})}*/
        
       
         
        return(
      
                <Layout>
                    <Header className="header">
                    <MenuBar name1='Logout' page1='/login' name3='dashboard' page3='/dashboard' />
                    </Header>
                    <Layout>
                        <Subnav/>
    
                        <Layout style={{ padding: '0 24px 24px' }}>
                              
                          <Typography.Title  style={{ margin: 20 }}>
                                Mes services
                          </Typography.Title>
        
                          <Tables name={columns} data={datasource}/>  
                             
                        </Layout>
                    </Layout>
                </Layout>
    
         
        );
    }
    

