import { Routes, Route, BrowserRouter as Router, useNavigate } from 'react-router-dom';

const Footer = () => {
    
    const navigate = useNavigate();

    const changeToHome = () => {
        navigate("/Home")
    };

    const changeToEmployee = () => {
        navigate("/Employee")
    };

    return (
            <div style={{ display: "flex", flexDirection: "row", width: "360px", height: "63px", background: "transparent linear-gradient(262deg, #0F2323 0%, #0F2323 40%) 0% 0% no-repeat padding-box", boxShadow: "inset 8px 4px 4px #00000040", border: "1px solid #0F2323", position: "fixed", bottom: 0, width: "100%", borderRadius: "25px 25px 0px 0px"}}>
                <div style={{margin: "auto 0px", color: "white", width: "45%", textAlign: "center"}} onClick={() => changeToHome()}>Home</div>
                <div style={{margin: "auto 0px", color: "white", width: "45%", textAlign: "center"}} onClick={() => changeToEmployee()}>Employee</div>
            </div>
    );
}

export default Footer;