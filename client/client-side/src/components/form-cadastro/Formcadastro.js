import React,{useState} from 'react';
import './Formcadastro.css';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from '../header/Header';
import Axios from 'axios'

const Formcadastro = () => {

    const [username, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        Axios.post("http://localhost:8080/register", {
            username: username,
            email: email,
            password: password,
        }).then( (response) => {
            console.log(response.data.token)
        })

       


    }


    return (
        <>
            <Header />;
            <div className="container-register">
                <div className="title-register">
                    <AiOutlineUsergroupAdd className="icon-user" />
                    <h2>Register</h2>
                </div>
                <form className="form-register" onSubmit={handleSubmit}>
                    <div className="text-field">
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            name="username"
                            className="username"
                            variant="outlined"
                            required
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            
                        />
                    </div>

                    <div className="text-field">
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            name="email"
                            className="email"
                            variant="outlined"
                            type="email"
                            required
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="text-field">
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            name="password"
                            className="password"
                            variant="outlined"
                            type="password"
                            required
                            autoComplete="off"
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
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Formcadastro;
