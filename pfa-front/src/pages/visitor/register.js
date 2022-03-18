import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

function Register(props) {
  return (
    <div>
      <Header
        name1=''
        page1=''
        name2=''
        page2=''
        name3=''
        page3=''
        name4=''
        page4=''
      />
      register
      <button>
        <Link to='/login'>login</Link>
      </button>
    </div>
  );
}

export default Register;
