import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

function Login(props) {
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
      hello from login
      <button>
        <Link to='/register'>register</Link>
      </button>
    </div>
  );
}

export default Login;
