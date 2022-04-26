import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AdminInterface from "./pages/admin/AdminInterface";
import UserInterface from "./pages/user/UserInterface";
import VisitorInterface from "./pages/visitor/VisitorInterface";

import Login from "./pages/visitor/Login";
import Register from "./pages/visitor/register";
import { Dashboard } from "./pages/user/Dashboard";
import { Services } from "./pages/user/Services";
import { Demandes } from "./pages/user/Demandes";
import FreelancersPage from "./pages/visitor/FreelancersPage";
import { useEffect, useState } from "react";
import { getCurrentUser } from "./services/visitorServices/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useNavigate();
  useEffect(() => {
    getCurrentUser().then((response) => {
      setCurrentUser(response);
      if (currentUser === null || currentUser === undefined) {
        history("/login");
      }
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<VisitorInterface />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        {currentUser && (
          <>
            <Route path='/admin' element={<AdminInterface />}></Route>
            <Route path='/user' element={<UserInterface />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route exact path='/services' element={<Services />}></Route>
            <Route exact path='/demandes' element={<Demandes />}></Route>
          </>
        )}
        <Route
          exact
          path='/categories/view/:categorieId'
          element={<FreelancersPage />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
