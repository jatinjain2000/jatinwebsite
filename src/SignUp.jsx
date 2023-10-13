import React from 'react'
import { styled } from "styled-components";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { Button } from "./styles/Button";



const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigateTo = useNavigate();

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/users",
                {

                    userName: name,
                    userEmail: email,
                    password: password

                });
            alert("Employee Registation Successfully");

            setName("");
            setEmail("");
            setPassword("");
            navigateTo('/login')


        }
        catch (err) {
            alert("User Registation Failed");
        }
    }


    return (
        <Wrapper style={{ "marginBottom": "100px" }} >
            <h2 className='common-heading' style={{ marginTop: "20px" }}> SIGN UP</h2>
            <div className='container'>
                <div className='contact-form'>

                    <form method='POST' className='contact-inputs' onSubmit={save}>
                        <input type="text" name="username" placeholder='Name'
                            autoComplete='off' required
                            onChange={(e) => {
                                setName(e.target.value);

                            }}

                        />
                        <input type="text" name="email" placeholder='E-mail'
                            autoComplete='off' required
                            onChange={(e) => {
                                setEmail(e.target.value);

                            }} />
                        <input type="password" name="password" placeholder='Password'
                            autoComplete='off' required
                            onChange={(e) => {
                                setPassword(e.target.value);

                            }} />

                        <Button onClick={save} style={{ fontSize: "20px", }}>Sign Up</Button>

                    </form>


                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
.contact-form {
max-width:50rem;
margin:auto;
font-size : 22px;
margin-bottom: 20px;

}
.contact-inputs {
display:flex;
flex-direction:column;
gap: 3rem;
}
input{
font-size : 16px;
}
textarea{
font-size : 16px;
}

`;



export default SignUp