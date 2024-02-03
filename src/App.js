import './App.css';
import React from 'react';
import Users from './pages/Users';
import Products from './pages/Products';
import CustomNavbar from "./components/Navbar/Navbar";
import Layout from "./pages/Layout";
import { BrowserRouter , Routes,Route } from 'react-router-dom';
function App() {
  
 
  return (
    <>
    <div className="App" >
   <BrowserRouter>
   <CustomNavbar/>
   <Routes>
      <Route path="/">
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products/>} />
        </Route>
   </Routes>
   </BrowserRouter>
   </div>
    
  </>
  );
}

export default App;
