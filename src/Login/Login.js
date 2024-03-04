import React, { useState } from 'react';
import './Login.css';
import imageOne from './../images/imageOne.png';
import { useNavigate } from 'react-router-dom';

const emailStyle = {
    width: "238px",
    height: "5vh",
    paddingLeft: "25px",
    borderRadius: "25px",
    boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
    backgroundColor: "#1F191966",
    border: 0,
    fontSize: "15px",
    color: "white"
}



function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [message, setMessage] = useState('');



    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || pass === '') {
            console.log("Please Fill all fields");
            setError(true);
            setMessage("Please Fill all fields");
        } else if(!email.includes('@')) {
            console.log("Incorect Email");
            setError(true);
            setMessage("Incorect Email");
        } else if(email === 'greendzine@mail.com' && pass === 'Green@123') {
            console.log("Your EMail is", email);
            console.log("Your Password is", pass);
            navigate('/home')    
        } else {
            setError(true);
            setMessage("Incorect Password or Email");
        }

      }

      const changeEmail = (event) => { 
        console.log(event)
        setEmail(event);
      }
      
      const changePassword = (event) => { 
        setPassword(event);
      }
      


    return (
        
           <div id="mainLayer" className="login-form">
            <div id="layerOne" className="layerOne">
                <img src={imageOne} alt="logo"/>
            </div>

            <div className="layerTwo">We are electric</div>
            
            <div className="layerThree">
                <form onSubmit={handleSubmit}>
                
                <input style={ emailStyle } className="fname" name="email" type="text" placeholder="Email" value={email} onChange={(event) => changeEmail(event.target.value)} />
                
                <input className="pword" name="pwd" type="password" placeholder="Password" value={pass} onChange={(event) => changePassword(event.target.value)}/>
                <br></br>
                <div style={{width: "60%", height: "9vw", margin: "0 auto", color: "green", textAlign: "center"}}>{error && <h2 style={{color: "red", fontSize: "18px"}}>{message}</h2>}</div>
                <button className='loginBtn' type="submit">Login</button>
                </form>
            </div>
            
            <div className="layerFour">
                <a type="submit" href="http://www.google.com">Forgot password?</a>
            </div>


            
           </div>
        
    );

    }
export default LoginForm;

