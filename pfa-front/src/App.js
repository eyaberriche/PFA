import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminInterface from "./pages/admin/AdminInterface";
import UserInterface from "./pages/user/UserInterface";
import VisitorInterface from "./pages/visitor/VisitorInterface";


import Login from "./pages/visitor/Login";
import Register from "./pages/visitor/register";
import { Services } from "./pages/user/Services";
import { Demandes } from "./pages/user/Demandes";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<VisitorInterface />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/admin' element={<AdminInterface />}></Route>
        <Route path='/user' element={<UserInterface />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/demandes' element={<Demandes />}></Route>



      </Routes>
    </div>
  );
}

export default App;
