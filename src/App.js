import './App.css';
import React from 'react';
import Home from './component/Home';
import Contact from './component/Conatct/Contact';
import About from './component/About/About';
// import AuthPage from './component/FFFF'/
// import Register from './component/Register';
// import Login from './component/Login';
// import Dashboard from './component/Dashboard';
import { BrowserRouter,  Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
   <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='About' element={<About/>}/>
          <Route  path='/Contact' element={<Contact/>}/>
          

            {/* <Route  path='Register' element={<Register/>}/>
            <Route  path='Login' element={<Login/>}/>

            <Route  path='Dashboard' element={<Dashboard/>}/>   */}
          


        </Routes>
        
        </BrowserRouter>
       
      </div>
    
  );
}

export default App;