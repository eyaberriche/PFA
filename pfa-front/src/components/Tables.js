import { Table } from 'antd';
import React from 'react';

export  function Tables (props){  
       
        return(

          <div>    
            <Table columns={props.name} dataSource={props.data} pagination={{ pageSize: 10 }} scroll={{ y: 240 }} />    
            
         </div>
        );
    }
    

