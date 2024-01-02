export default function About(){
    return(
        <div style={{color:"white", padding:"20px" }} >
         {/* <div style={{color:"white", padding:"20px" }}> */}
         <h1 style={{transform:"translate(0px, -70px)"}}>About Me</h1>
         
         <div style={{backgroundColor:"#22687A", padding:"20px" , borderRadius:"20px"}}>
            <p>Hello there! 👋 My name is Saurabh and I'm from Maharastra, India. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.</p>
         </div>
            
            <h2 style={{textAlign:"center"}}>Primary Focus</h2>
            <div style={{display:"flex" , justifyContent:"space-between", gap:"25px"}}>
            <div style={{display:"flex",  gap:"15px" ,backgroundColor:"#22687A", padding:"20px" , borderRadius:"20px" }}> 
               <h3>
                <img style={{marginTop:""}} width={50} src="https://oktayshakirov.com/assets/images/icon-dev.svg" alt=""/>
             </h3>
              <div>
                <h3>Web Design & Development</h3>
                <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
              </div>
            </div>

            <div style={{display:"flex",  gap:"15px" ,backgroundColor:"#22687A", padding:"20px" , borderRadius:"20px"}}> 
               <h3>
                <img style={{marginTop:""}} width={50} src="https://oktayshakirov.com/assets/images/icon-frameworks.svg" alt=""/>
             </h3>
              <div>
                <h3>Development Solutions</h3>
                <p>Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.</p>
              </div>
            </div>
            </div>
  


            <h2 style={{textAlign:"center"}}>Programming Languages</h2>
            <div style={{display:"flex",  gap:"15px" ,backgroundColor:"#22687A", padding:"20px" , borderRadius:"20px"}}> 
               <div>
                  <h4>JavaScript <span style={{fontWeight:"200"}}>80%</span> </h4>
                
                  <h4>React <span style={{fontWeight:"200"}}>75%</span> </h4>
               
                  <h4>CSS <span style={{fontWeight:"200"}}>95%</span> </h4>

                  <h4>HTML <span style={{fontWeight:"200"}}>100%</span> </h4>
                  
                  <h4>Java <span style={{fontWeight:"200"}}>75%</span> </h4>

               </div>

            </div>




            <h2 style={{textAlign:"center"}}>Human Languages</h2>
            <div style={{display:"flex",  gap:"15px" ,backgroundColor:"#22687A", padding:"20px" , borderRadius:"20px" }}> 
                <div>
                   <h4> English <span style={{fontWeight:"200"}}>80%</span> </h4>
                
                  <h4>Hindi <span style={{fontWeight:"200"}}>100%</span> </h4>
             
                  <h4>Marathi <span style={{fontWeight:"200"}}>100%</span> </h4>
                </div>
            </div>

            <h2 style={{textAlign:"center"}}>Development Skills</h2>
            <div style={{display:"flex",  gap:"15px" ,backgroundColor:"#22687A", padding:"40px" , borderRadius:"20px" }}> 
            <div>
               <img width="140" src="https://oktayshakirov.com/assets/images/html.png" alt=""/>
               <img width="140" src= "https://oktayshakirov.com/assets/images/css.png" alt = ""></img>
               <img width="140" src= "https://oktayshakirov.com/assets/images/java-script.png" alt = ""></img>
               <img width="140" src= "https://oktayshakirov.com/assets/images/react.png" alt = ""></img>
               <img width="140" src="https://oktayshakirov.com/assets/images/github.png" alt=""/>
              </div>
            </div>


            <h2 style={{textAlign:"center"}}>Favorite Activities</h2>
            <div style={{display:"flex",  gap:"15px" ,backgroundColor:"#22687A", padding:"20px" , borderRadius:"20px" }}> 
                <div>
                   <h3>Traveling</h3>

                   <h3>Investments</h3>

                   <h3>Photography</h3>
                
                   <h3>Learning New things</h3>
                </div>
            </div>

           
          


         {/* </div> */}
         </div>
    );
}