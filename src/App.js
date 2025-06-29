import './App.css';
import React,{useState} from 'react'
import Chess from './Components/Chess'
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';
import{
   BrowserRouter as Router,
   Routes,
   Route,
 
}from "react-router-dom";


function App() {   
   const[mode,setmode]=useState('light');
   
   const togglemode=()=>{
      if(mode==='light'){
        setmode('dark');
        document.body.style.background='grey';
      }else{
       setmode('light');
       document.body.style.background='white';
      }
   }

  return (
    
    <Router>
      <Navbar title="Textutilies"  about="about-us" mode={mode} togglemode={togglemode}/>
      {/* <Alert alert="this is an alert"/> */}
      <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={ <About/>}/>
              <Route exact path="/"  element={<Textform heading="Enter the Text"  mode={mode}/>} />
              <Route exact path="/Chess" element={ <Chess/>}/>
          </Routes>
      </div> 
      </Router>
    
    
    );
}

export default App;