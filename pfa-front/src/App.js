import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminInterface from "./pages/admin/AdminInterface";
import Categories from "./pages/visitor/Categories";
import Login from "./pages/visitor/Login";
import Register from "./pages/visitor/register";

import VisitorInterface from "./pages/visitor/VisitorInterface";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<VisitorInterface />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/admin' element={<AdminInterface />}></Route>
      </Routes>
    </div>
  );
}

export default App;
