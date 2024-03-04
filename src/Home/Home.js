import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import imageTwo from './../images/imageTwo.png';
import imageThree from './../images/imageThree.png';


const BgBlackStyle={
    backgroundColor:"Black",
    width: "100%",
    height: "100vh",
    
}
const layerOneStyle={
    paddingTop:"5%", 
    marginLeft: "80%",
}   
const layerTwoStyle={
    
    marginTop: "10%",
    textAlign:"center",   
}
const layerFourStyle={
    margin: "7% auto",
    textAlign:"center",
    width: "328px",
    height: "45px",
    borderRadius: "25px",  
    backgroundColor: "#1A2C2C99 ",
    border: 0,
    fontSize: "15px",
    color: "#FFFFFFB3"  
}

const layerFourSpanStyle={
    height: "45px",
    display: "flex",
    alignContent: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "baseline",
    flexWrap: "wrap"
}

const productionStyle={
    textAlign:"left",
    
    fontSize:"20px",
    color: "#FFFFFF",
    top: "302px",
    marginTop:"40px",
    marginLeft:"40px",
    left: "473px",
    width: "300px",
    height: "15px"
}


const sideOneStyle={
    textAlign: "right",
    color: "#36A546",
    paddingLeft:"1%",
    width: "0%",
    height: "150%",
    float:"right",
}

const rangeOneStyle={
    borderRadius: "20px",  
    backgroundColor: "#1A2C2C99 ",
    borderColor:" #36A546",
    marginTop:"4%",
    marginLeft:"3%",
    width:"6px",
    border: "1px solid #36A546"
}
const proTuesdayStyle={
    textAlign:"left",
    fontSize:"20px",
    color: "#FFFFFF",
    top: "302px",
    marginTop:"40px",
    marginLeft:"40px",
    left: "473px",
    width: "300px",
    height: "15px"
}
const sideTwoStyle={
    textAlign: "right",
    color: "#36A546",
    paddingLeft:"1%",

    width: "0%",
    height: "150%",
    float:"right",
    }
const rangeTwoStyle={
    borderRadius: "10px",  
    backgroundColor: "#1A2C2C99 ",
    border:"10px",
    borderColor:" #36A546",
    marginTop:"4%",
    marginLeft:"3%",
    width:"220px"
}
const proWednesdayStyle={
    textAlign:"left",
    
    fontSize:"20px",
    color: "#FFFFFF",
    top: "302px",
    marginTop:"40px",
    marginLeft:"40px",
    left: "473px",
    width: "300px",
    height: "15px"
}
const sideThreeStyle={
    textAlign: "right",
    color: "#36A546",
    paddingLeft:"1%",
    width: "0%",
    height: "150%",
    float:"right"
}
const rangeThreeStyle={
    borderRadius: "20px",  
    backgroundColor: "#1A2C2C99 ",
    // border:"10px",
    borderColor:" #36A546",
    marginTop:"4%",
    marginLeft:"3%",
    width:"300px",
    border: "1px solid #36A546",

}
const proThursdayStyle={
    textAlign:"left",
    
    fontSize:"20px",
    color: "#FFFFFF",
    top: "302px",
    marginTop:"40px",
    marginLeft:"40px",
    left: "473px",
    width: "300px",
    height: "15px"
}
const sideFourStyle={
    textAlign: "right",
    color: "#36A546",
    paddingLeft:"1%",
    width: "0%",
    height: "150%",
    float:"right",
}
const rangeFourStyle={
    borderRadius: "20px",  
    backgroundColor: "#1A2C2C99 ",
    // border:"10px",
    borderColor:" #36A546",
    marginTop:"4%",
    marginLeft:"3%",
    width:"250px",
    border: "1px solid #36A546"
}
const proFridayStyle={
    textAlign:"left",    
    fontSize:"20px",
    color: "#FFFFFF",
    top: "302px",
    marginTop:"40px",
    marginLeft:"40px",
    left: "473px",
    width: "300px",
    height: "15px"
}
const sideFiveStyle={
    textAlign: "right",
    color: "#36A546",
    paddingLeft:"1%",
    width: "0%",
    height: "150%",
    float:"right",
}
const rangeFiveStyle={
    borderRadius: "20px",  
    backgroundColor: "#1A2C2C99 ",
    // border:"10px",
    borderColor:" #36A546",
    marginTop:"4%",
    marginLeft:"3%",
    width:"210px",
    border: "1px solid #36A546"
}
const proSaturdayStyle={
    textAlign:"left",
    
    fontSize:"20px",
    color: "#FFFFFF",
    top: "302px",
    marginTop:"40px",
    marginLeft:"40px",
    left: "473px",
    width: "300px",
    height: "15px",
}
const sideSixStyle={
    textAlign: "right",
    color: "#36A546",
    paddingLeft:"1%",
    width: "0%",
    height: "150%",
    float:"right"

}
const rangeSixStyle={
    borderRadius: "20px",  
    backgroundColor: "#1A2C2C99 ",
    // border:"10px",
    borderColor:" #36A546",
    marginTop:"4%",
    marginLeft:"3%",
    width:"240px",
    border: "1px solid #36A546"
}

function HomeForm() {
    const navigate = useNavigate();

    const changeToHome = () => {
        navigate("/Home")
    };

    const changeToEmployee = () => {
        navigate("/Employee")
    };
      


    return (

        
           <div id="BgBlack" style={BgBlackStyle}>

           <div id="layerOne" style={layerOneStyle} >
           <img src={imageThree} alt="logo3"/>  
           </div>

            <div id="layerTwo" style={layerTwoStyle}>
            <img src={imageTwo} alt="logo2"/> 
            </div>

            <div id="layerFour" style={layerFourStyle}><span style={layerFourSpanStyle}>Employee Productivity Dashboard</span></div >
            <div id="production"  style={productionStyle}><aside id="sideOne" style={sideOneStyle}> 4%</aside>  Productivity on Monday
            </div>

            <div id="rangeOne">
                <input style={rangeOneStyle}></input>
            </div>

            <div id="proTuesday"  style={proTuesdayStyle}><aside id="sideTwo" style={sideTwoStyle}> 92%

            </aside>  Productivity on Tuesday
            </div>

            <div id="rangeTwo">
                <input style={rangeTwoStyle}></input>
            </div>

            <div id="proWednesday"  style={proWednesdayStyle}><aside id="sideThree" style={sideThreeStyle}> 122%

            </aside>  Productivity on Wednesday
            </div>
            <div id="rangeThree">
                <input style={rangeThreeStyle}></input>
            </div>

            <div id="proThursday"  style={proThursdayStyle}><aside id="sideFour" style={sideFourStyle}> 93%

            </aside>  Productivity on Thursday
            </div>
            <div id="rangeFour">
                <input style={rangeFourStyle}></input>
            </div>

            
            <div id="proFriday"  style={proFridayStyle}><aside id="sideFive" style={sideFiveStyle}> 89%

            </aside>  Productivity on Friday
            </div>
            <div id="rangeFive">
                <input style={rangeFiveStyle}></input>
            </div>

            <div id="proSaturday"  style={proSaturdayStyle}><aside id="sideSix" style={sideSixStyle}> 98%

            </aside>  Productivity on Saturday            </div>
            <div id="rangeSix">
            <input style={rangeSixStyle}></input>
            </div>

            <div style={{ display: "flex", flexDirection: "row", height: "63px", background: "transparent linear-gradient(262deg, #0F2323 0%, #0F2323 40%) 0% 0% no-repeat padding-box", boxShadow: "inset 8px 4px 4px #00000040", border: "1px solid #0F2323", position: "fixed", bottom: 0, width: "100%", borderRadius: "25px 25px 0px 0px"}}>
                <div style={{margin: "auto 0px", color: "white", width: "45%", textAlign: "center", fontStyle: "bold", fontSize: "20px"}} onClick={() => changeToHome()}>Home</div>
                <div style={{margin: "auto 0px", width: "45%", textAlign: "center", fontStyle: "bold", fontSize: "20px", color: "#5E5E5E82"}} onClick={() => changeToEmployee()}>Employee</div>
            </div>
           </div>
    );
}
export default HomeForm;

