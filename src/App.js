import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import {  BrowserRouter, Routes ,Route,} from "react-router-dom";

function App() {
  
  return (
    <div>
     <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/login" element={<Login/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
