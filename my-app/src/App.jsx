import Explore from "./pages/explore";
import Home from "./pages/home"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/explore" exact element={<Explore />} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App