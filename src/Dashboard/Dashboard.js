import Footer from "../Footer/Footer";
import HomeForm from "../Home/Home";
import Header from "../Header/Header";
import EmployeeForm from "../Employee/Employee";

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div style={{color: "#000000"}}>
            <Routes>
                <Route path="/home" element={<HomeForm />} />
                <Route path="/Employee" element={<EmployeeForm />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Dashboard;