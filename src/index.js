import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';



import LoginForm from './Login/Login';

import HomeForm from './Home/Home';

import EmployeeForm from './Employee/Employee';
// import Dashboard from './Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>  
        <Route path="/home" element={<HomeForm />}></Route>
        <Route path="/Employee" element={<EmployeeForm />}></Route>
      </Routes>
      
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
