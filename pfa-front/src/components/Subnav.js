import React  from "react";
import { Layout, Menu } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import {NavLink,} from 'react-router-dom';

export function Subnav(){
    
        const  {SubMenu}  = Menu;
        const {  Sider } = Layout;
        
        return(
       
           
                <Sider width={300}  className="site-layout-background">
                    <Menu 
                        theme="dark"
                        mode="inline"
                      
                      
                    >
                        
                            <NavLink to='/services' replace={true}  >
                                <Menu.Item key="1">Services</Menu.Item>
                            </NavLink>
                            <NavLink to='/demandes' replace={true}>
                                <Menu.Item key="2">Demandes</Menu.Item>

                            </NavLink>
                           
                       
                        
          
                    </Menu>
                </Sider>
              
        
    
        );
    }

