import mypic from "./mypic.jpg"

function Sidebar(){
    return(
    <div style={{}}>
        <div style={{width:"14vw", backgroundColor:"#218091" , padding:"20px" , borderRadius:"20px", display:"flex", flexDirection:"column", alignItems:"center", color:"white" ,position:"sticky" , top:"50px"}}>
           <img width="80%" style={{borderRadius:"20px"}} b src={mypic} alt="" />
           <h4 style={{color:"white"}}>Saurabh Shrikhande</h4>
           <h6 style={{backgroundColor:"#215968", marginTop:"0", color:"white", padding:"10px 25px" , borderRadius:"25px", boxShadow:"0 0 10px  white" }}>Hello, World !</h6>

           <hr></hr>
             
           <div>
            <div style={{ display:"flex", gap:"25px"}}>
                <div style={{backgroundColor:"#215968", padding:"5px 5px" , borderRadius:"10px", display:"flex" , alignItems:"center", justifyContent:"center"}}> 
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hourglass" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="yellow" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                     <path d="M6.5 7h11" />
                     <path d="M6.5 17h11" />
                     <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
                     <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
                </svg>
                </div>
                <div>
                    <p style={{margin:"0"}}>AGE</p>
                    <p style={{margin:"0"}}>26 year old</p>
                </div>
            </div>
             

           
            <div style={{ display:"flex", gap:"25px", margin:"15px 0" }}>
                <div style={{backgroundColor:"#215968", padding:"5px 5px" , borderRadius:"10px", display:"flex" , alignItems:"center", justifyContent:"center"}}> 
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" stroke-width="0" fill="yellow" /></svg>
                </div>
                <div>
                    <p style={{margin:"0"}}>LOCATION</p>
                    <p style={{margin:"0"}}>MH, India</p>
                </div>
            </div>

            <div style={{ display:"flex", gap:"25px"}}>
                <div style={{backgroundColor:"#215968", padding:"5px 5px" , borderRadius:"10px", display:"flex" , alignItems:"center", justifyContent:"center"}}> 
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="yellow" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                </div>
                <div>
                    <p style={{margin:"0"}}>PERSONALITY TYPE</p>
                    <p style={{margin:"0"}}>INTJ_T</p>
                </div>
            </div>
         </div>

         <div style={{margin:"40px", display:"flex", gap:"10px"}}>
            <a href="https://www.linkedin.com/in/er-saurabh-shrikhande-0b0976213/">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="lightGray" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
            </a>

            <a href="https://www.instagram.com/saurabh_shrikhande/">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="lightGray" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
            </a>
           
           <a href="https://github.com/SaurabhShrikhande">
           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="lightGray" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
           </a>

            <a href="./">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="lightGray" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" /></svg>
            </a>
         </div>

        </div>
    </div>);
}

export default Sidebar;