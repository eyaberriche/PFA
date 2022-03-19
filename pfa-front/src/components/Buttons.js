import React from "react";
import {Button } from 'antd';

export function Buttons(props){
    return(
<div style={{margin:"0px 0px"}}>
    <Button type="primary" style={{backgroundColor: "#A9A9A9"}}>{props.name1}</Button>
    <Button type="primary" style={{backgroundColor: "#909090"}}>{props.name2}</Button>
    <Button type="primary" style={{backgroundColor: "#808080"}}>{props.name3}</Button>
    <Button type="danger">{props.name4}</Button>
    </div>
    );
}