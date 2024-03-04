import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imageTwo from './../images/imageTwo.png';
import imageThree from './../images/imageThree.png';


const BgBlackStyle = {
    backgroundColor: "Black",
    width: "100%",
    height: "200vh",
}
const layerOneStyle = {
    paddingTop: "5%",
    marginLeft: "80%",
}
const layerTwoStyle = {

    marginTop: "10%",
    textAlign: "center",
}

function EmployeeForm() {
    const navigate = useNavigate();

    const changeToHome = () => {
        navigate("/Home")
    };

    const changeToEmployee = () => {
        navigate("/Employee")
    };

    let employees = [
        {
            id: 1,
            name: "Allen",
            DOB: "16-02-1999",
            Role: "Web Developer"
        },
        {
            id: 2,
            name: "Solly",
            DOB: "22-01-1998",
            Role: "Android Developer"
        },
        {
            id: 3,
            name: "Indian",
            DOB: "22-01-1998",
            Role: "Android Developer"
        },
        {
            id: 4,
            name: "Terrain",
            DOB: "22-01-1998",
            Role: "Android Developer"
        },
        {
            id: 5,
            name: "Basics",
            DOB: "22-01-1998",
            Role: "Android Developer"
        }
    ];



    const [employee, setEmployee] = useState(employees)
    const searchEmployee = (e) => {
        if (e !== '') {
            const newEmployees = employee.filter(emp => {
                if (emp.name.toLowerCase().includes(e.toLowerCase())) {
                    return emp;
                } else {
                    return '';
                }
            });
            console.log(newEmployees);
            setEmployee(newEmployees);
        } else {
            setEmployee(employees);
        }
    }

    return (

        <div id="BgBlack" style={BgBlackStyle}>

            <div id="layerOne" style={layerOneStyle} >
                <img src={imageThree} alt="logo3" />
            </div>

            <div id="layerTwo" style={layerTwoStyle}>
                <div style={{ width: "32px", height: "32px", borderRadius: "22px", fontSize: '18px', paddingTop: '0.5%', color: "green", backgroundColor: "#5E5E5EB5", marginLeft: "55%" }}>4</div>
                <img src={imageTwo} alt="logo2" />
            </div>

            <div style={{ textAlign: 'center', marginTop: "5%" }}>
                <input type="text" onChange={(event) => searchEmployee(event.target.value)} placeholder='Search with Name' style={{ width: "80%", height: "5vh", background: "#5E5E5E82", borderRadius: "15px", color: "white", margin: "0 auto", textAlign: "center", border: 0 }} />
            </div>

            {employee.map((e, i) => {
                if (i % 2 === 0) {
                    return [

                        <div key={i} style={{ paddingLeft: '5%', paddingTop: '5%', width: "80%", height: "20vh", background: "#5E5E5E82", borderRadius: "15px", margin: "0 auto", color: "white", marginLeft: "5%", marginTop: "9%", border: 0 }}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '45%', height: '4vh', fontStyle: 'bold' }}>EMP ID</td>
                                        <td>:</td>
                                        <td>{e.id}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '45%', height: '4vh', fontStyle: 'bold' }}>Name</td>
                                        <td>:</td>
                                        <td>{e.name}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '45%', height: '4vh', fontStyle: 'bold' }}>DOB</td>
                                        <td>:</td>
                                        <td style={{ color: 'orange' }}>{e.DOB}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '45%', height: '4vh', fontStyle: 'bold' }}>Role</td>
                                        <td>:</td>
                                        <td style={{ color: 'green' }}>{e.Role}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    ]

                } else {
                    return [

                        <div key={i} style={{ paddingLeft: '5%', paddingTop: '5%', width: "80%", height: "20vh", background: "#5E5E5E82", borderRadius: "15px", margin: "0 auto", color: "white", marginLeft: "10%", marginTop: '9%', border: 0 }}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '45%', height: '4vh', fontStyle: 'bold' }}>EMP ID</td>
                                        <td>:</td>
                                        <td>{e.id}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '45%', height: '4vh', fontStyle: 'bold' }}>Name</td>
                                        <td>:</td>
                                        <td>{e.name}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '45%', height: '4vh', fontStyle: 'bold' }}>DOB</td>
                                        <td>:</td>
                                        <td style={{ color: 'orange' }}>{e.DOB}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '45%', height: '4vh', fontStyle: 'bold' }}>Role</td>
                                        <td>:</td>
                                        <td style={{ color: 'green' }}>{e.Role}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    ]

                }
            })}

            <div style={{ display: "flex", flexDirection: "row", height: "63px", background: "transparent linear-gradient(262deg, #0F2323 0%, #0F2323 40%) 0% 0% no-repeat padding-box", boxShadow: "inset 8px 4px 4px #00000040", border: "1px solid #0F2323", position: "fixed", bottom: 0, width: "100%", borderRadius: "25px 25px 0px 0px" }}>
                <div style={{ margin: "auto 0px", width: "45%", textAlign: "center", fontStyle: "bold", fontSize: "20px", color: "#5E5E5E82" }} onClick={() => changeToHome()}>Home</div>
                <div style={{ margin: "auto 0px", color: "white", width: "45%", height: '3vh', textAlign: "center", fontStyle: "bold", fontSize: "20px" }} onClick={() => changeToEmployee()}>Employee</div>
            </div>
        </div>
    );
}
export default EmployeeForm;

