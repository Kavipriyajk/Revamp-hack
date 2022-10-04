import React from "react";
import Form from "./forms";


function Template(){
   const Disp = (a) => {
    document.getElementById('pre').setAttribute('src',a);
  }
 
  
    return(
        <div className="section">
            <h3 style={{textAlign:"center"}}><u>Choose a template</u></h3>
            <div className="images">
              <div className="i">
                <img src="../pics/cert.png" alt="img1"></img> <br></br>
                <center>

                <button onClick={()=>Disp('../pics/cert.png')}>Choose</button>
                </center>
              </div>
              <div className="i">
                <img src="../pics/cert2.png" alt="img2"></img> <br></br>
                <center>
                <button onClick={()=>Disp('../pics/cert2.png')}>Choose</button>
                </center>

              </div>
              <div className="i">
                <img src="../pics/cert3.png" alt="img3"></img><br></br>
                <center>
                <button onClick={()=>Disp('../pics/cert3.png')}>Choose</button>
                </center>
              </div>
            </div>
            <div>
        <center>
       <h2 style={{textAlign:"center"}}><u>Preview</u></h2>
        </center>
        <div className="divbunch">
          <div  id="instlogo">
        
          </div>
          <div  className="deets" id="instname"></div>
          <div className="deets"  id="coe">Certificate of Excellence</div>
          <div className="deets"  id="Pt">Presented to</div>
          <div className="deets"  id="oname"></div>
          <div className="deets"  id="statement">This is to certify his/her outstanding academic performance in this year</div>

       <div className="bottom">
        <div className="deets" id="date">

        </div>
        <div className="sign"></div>
       </div>
        </div>
        <div id='prev'>
            <img id='pre'>
            </img>

        </div>
        </div>
        <div id="displayimg">

        </div>
        </div>
        
    );
}

export default Template;