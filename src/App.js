import './App.css';
import Sidebar from './componant/Sidebar';
import { useState } from 'react';
import About from './componant/About';
import Certificate from './componant/Certificate';
import Project from './componant/Project';
import More from './componant/More';
import Contact from './componant/Contact';

function App() {
  const [about , setabout] = useState(true);
  const [certificate , setcert] = useState(false);
  const [project , setproj] = useState(false);
  const [more , setmore] = useState(false);
  const [contact , setcont] = useState(false);
 

  const abt = () => {
    setabout(true);
    setcert(false);
    setproj(false);
    setmore(false);
    setcont(false);
    
  }
  const cert = () => {
    setabout(false);
    setcert(true);
    setproj(false);
    setmore(false);
    setcont(false);
  }

  const proj = () => {
    setabout(false);
    setcert(false);
    setproj(true);
    setmore(false);
    setcont(false);
  }

  const mor = () => {
    setabout(false);
    setcert(false);
    setproj(false);
    setmore(true);
    setcont(false);
  }

  const cont = () => {
    setabout(false);
    setcert(false);
    setproj(false);
    setmore(false);
    setcont(true);
  }



  return (
    <div  style={{backgroundColor:"#1EA7CF", padding:"50px 10vw"}} >
        <div style={{display:"flex", gap:"50px" }}>
         <Sidebar/>
    
          <div style={{backgroundColor:"#218091", borderRadius:"20px"}}>
             
             <div style={{display:"flex", justifyContent:"flex-end", width:"55vw"}}>
                <div style={{display:"flex", backgroundColor:"#294047", color:"white", fontSize:"15px", padding:"0 20px", borderRadius:"0px 20px"}}>
              <h3 onClick={() => {abt()}} style={{padding:"7px 10px" , cursor:"pointer"}}>About</h3>
              <h3 onClick={() => {cert()}} style={{padding:"7px 10px" , cursor:"pointer"}}>Certificates</h3>
              <h3 onClick={() => {proj()}} style={{padding:"7px 10px" , cursor:"pointer"}}>Projects</h3>
              <h3 onClick={() => {mor()}} style={{padding:"7px 10px" , cursor:"pointer"}}>More</h3>
              <h3 onClick={() => {cont()}} style={{padding:"7px 10px", cursor:"pointer"}}>Contact</h3>
              </div>
             </div>

             {  about && <div>
                      <About/>
                      <div style={{width:"100%", display:'flex', justifyContent:"flex-end"}}>
                      <button style={{margin:"20px", color:"white", backgroundColor:"#204665", padding:"10px 40px", borderRadius:"8px" , border:"none", fontSize:"15px" , fontWeight:"700"}} onClick={()=>{cert()}}>Next  &gt; </button>
                      </div>
             </div>
             }
             {
               certificate && <div>
                <Certificate/>
                <div style={{width:"100%", display:'flex', justifyContent:"flex-end"}}>
                      <button style={{margin:"20px", color:"white", backgroundColor:"#204665", padding:"10px 40px", borderRadius:"8px" , border:"none", fontSize:"15px" , fontWeight:"700"}} onClick={()=>{proj()}}>Next  &gt; </button>
                      </div>
                 </div>
             }

             {  
               project && <div>
                <Project/>
                <div style={{width:"100%", display:'flex', justifyContent:"flex-end"}}>
                      <button style={{margin:"20px", color:"white", backgroundColor:"#204665", padding:"10px 40px", borderRadius:"8px" , border:"none", fontSize:"15px" , fontWeight:"700"}} onClick={()=>{mor()}}>Next  &gt; </button>
                      </div>
               </div>
             }

             { 
               more && <div>
               <More/>
               <div style={{width:"100%", display:'flex', justifyContent:"flex-end"}}>
                      <button style={{margin:"20px", color:"white", backgroundColor:"#204665", padding:"10px 40px", borderRadius:"8px" , border:"none", fontSize:"15px" , fontWeight:"700"}} onClick={()=>{cont()}}>Next  &gt; </button>
                      </div>
               </div>
             

             }

             {
              contact &&  <div>
              <Contact/>

              </div>
             }

          </div>

         </div>
    </div>
  );
}

export default App;
