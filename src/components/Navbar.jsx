import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Nav>
            <div className='menuIcon'>
                <ul className='navbar-list' style={{ fontSize: '33px', color: "white" }}  >
                    <li>
                        <NavLink className="navbar-link" to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/contact">Contacts</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbar-link" to="/products">Products</NavLink>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}
const Nav = styled.nav`
    .navbar-list{
        display:flex;
        gap:4.8rem;
        text-size:80px;
        
    }
    li{
        list-style:none;
        
    }
    .navbar-link{
        color:white;
         &:hover,
        &:active {
            color: ${({ theme }) => theme.colors.helper};
        }
    }



`;

export default Navbar
