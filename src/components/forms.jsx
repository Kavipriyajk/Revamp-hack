import React from 'react';
import {render} from 'react-dom';
import Template from './template';



function Form(){
 
    const Getelems=()=>{
    console.log('Heyyyyy');
    const univname=document.getElementById('uni').value;
    const ownname=document.getElementById('own').value;
    const regno=document.getElementById('reg').value;
    const logo=document.getElementById('logimg').value;
    console.log(logo);
    // const signature=document.getElementById('sign').value;
  
    console.log(univname);
    console.log(ownname);
    console.log(regno);
    document.getElementById('instname').innerHTML=univname;
    document.getElementById('oname').innerHTML=ownname+" "+regno;

  }
  
  return(
        <div className="formbox">
           <h1 style={{textAlign:'center'}}>Enter Details</h1><br/>
        <div class="fm">
           <form>
            <label>Enter Institute name:</label> <br/>
            <input type="text" id="uni"></input> <br/>
            <label>Enter Owner name:</label> <br/>
            <input type="text" id="own"></input> <br/>
            <label>Enter Registration number:</label> <br/>
            <input type="text" id="reg"></input> <br/>
            <label>Upload institute logo:</label> <br/>
            <input type="file" id="logimg"></input> <br/>
            <label>Upload signature:</label><br/>
            <input type="file" id="sign"></input> <br/>
          
            <input type="button" value="OK" onClick={()=>Getelems()}></input>
           </form>
        </div>
        </div>
    );
}

export default Form;
