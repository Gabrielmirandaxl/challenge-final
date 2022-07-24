import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Formlogin from '../form-login/Formlogin';
import Formcadastro from '../form-cadastro/Formcadastro';
import Dashboard from '../dashboard/Dashboard';


const MainRouters = () => {


    return (
      <>

       

    
            <Routes>
                <Route path="/login" element={<Formlogin />} />
                <Route path="/cadastro" element={<Formcadastro />} />
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
      
        
       
        
      </>
    );
};

export default MainRouters;
