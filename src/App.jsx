import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Skills from "./pages/Skills"
import About from "./components/About"
import Home from "./pages/Home"
import Documents from "./pages/Documents"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Achievements from "./components/Achievements"
 


function App() {
  return (
    <>
       <Navbar/>
       <Routes>
        <Route path ="/" element ={<Home/>}/> 
         <Route path="/documents" element={<Documents/>}/>
         <Route path="/achievements" element={<Achievements/>}/>
        <Route path ="/About" element ={<About/>}/>
        <Route path ="/Skills" element ={<Skills/>}/>
        <Route path ="/Project" element ={<Project/>}/>
        <Route path ="/Contact" element ={<Contact/>}/> 
         
       </Routes>
    </>
  );
}

export default App;

 