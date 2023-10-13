import React from 'react'
import { styled } from "styled-components";
import { NavLink } from 'react-router-dom'
const Login = () => {
    return (
        <Wrapper style={{ "marginBottom": "100px" }} >
            <h2 className='common-heading' style={{ marginTop: "20px" }}> LOGIN</h2>
            <div className='container'>
                <div className='contact-form'>

                    <form action="" method='POST' className='contact-inputs'>
                        <input type="text" name="username" placeholder='E-mail'
                            autoComplete='off' required />
                        <input type="password" name="password" placeholder='Password'
                            autoComplete='off' required />


                        <input style={{ maxWidth: "none" }} type="submit" value="Login" ></input>
                    </form>

                    <h3 style={{ fontSize: "22px", marginTop: "20px", textAlign: "center" }}>Don't have an account ?
                        &nbsp;&nbsp;<NavLink className="navbar-link" to="/signup"><u>Sign Up</u></NavLink></h3>

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
export default Login
