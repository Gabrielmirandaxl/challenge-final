import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaUserCircle } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import Header from '../header/Header';
import './Formlogin.css';
import Axios from 'axios';
import { headerConfig } from '../authe';

const Formlogin = () => {

  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState(false)
    const [token, setToken] = useState(false)
  

   

    const  handleSubmit = (e) =>{
        e.preventDefault()
  
        Axios.post("http://localhost:8080/login",  {
            email: email,
            password: password,
        })
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            setValidation(true)
            console.log(response.data.token)
           
            
        }).catch( () =>{
            alert("Preencha os dados corretos")
            setValidation(false)
            console.log(validation)
        })

       Axios.get("http://localhost:8080/authe", {
        headers : headerConfig
           
        
       })

       const token = localStorage.getItem('token')

       if(token){
        setToken(true)
       }
        
    }


    return (
        <>

{validation &&  token ? <Navigate to="/dashboard" replace={true}/> : ''} 
            <Header />

            <div className="container-login">
                <div className="title-login">
                    <FaUserCircle className="icon-user" />
                    <h2>Login</h2>
                    
                </div>
                <form className="form-login" onSubmit={ handleSubmit} method="post">
                    <div className="text-field">
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            name="email"
                            variant="outlined"
                            type="email"
                            autoComplete="off"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="text-field">
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            name="password"
                            variant="outlined"
                            type="password"
                            autoComplete="off"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="button">
                        <Button
                            variant="contained"
                            color="success"
                            id="button-register"
                            type="submit"
                           
                        >

                            Sign in <BiSend style={{ marginLeft: ' 10px' }} />
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Formlogin;
