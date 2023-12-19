import Explore from "./pages/explore";
import Home from "./pages/home"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/login";
import UniversityLoginForm from "./pages/university";
import IndustryLoginForm from "./pages/industry";
import Inovation from "./pages/inovation";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/explore" exact element={<Explore />} /> 
        <Route path="/login" exact element={<Login />} /> 
        <Route path="/univiersity-login-form" exact element={<UniversityLoginForm />} /> 
        <Route path="/industry-login-form" exact element={<IndustryLoginForm />} /> 
        <Route path="/college-dashboard" exact element={<Dashboard/>} /> 
        <Route path="/company-dashboard" exact element={<Dashboard/>} /> 
        <Route path="/inovation" exact element={<Inovation/>} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App