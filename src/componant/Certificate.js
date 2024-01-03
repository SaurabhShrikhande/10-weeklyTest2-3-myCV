import mark10th from '../mark10th.jpg';
import be from "./BE.jpg";
import cad from "./cad.jpg"
import mtech from "./Mtech.jpg"
import mscit from "./mscit.jpg"

export default function Certificate(){
     return (<diV style={{color:"white", padding:"20px" }}>
    <h1 style={{transform:"translate(0px, -70px)"}}>Certificates</h1>
    
 

    <div style={{marginInline:"40px"}}>
        <h3>10th Bord Marksheet</h3>
        <img width={200} src={mark10th} alt=""/>   
    </div>

    <div style={{margin:"40px"}} >
        <h3>Bachlor of Engineer</h3>
        <img width={200} src={be} alt=""/>   
    </div>

    <div style={{margin:"40px"}} >
        <h3>MSCIT certificate</h3>
        <img width={200} src={mscit} alt=""/>   
    </div>

    <div style={{margin:"40px"}} >
        <h3>Master in Technology</h3>
        <img width={200} src={mtech} alt=""/>   
    </div>

    
    <div style={{margin:"40px"}} >
        <h3>CAD Certificater</h3>
        <img width={200} src={cad} alt=""/>   
    </div>


    </diV>)
}