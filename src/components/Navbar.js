import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Nav>
            <div style={{ paddingLeft: "2rem" }}>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>TypingSpeedTest</Link>
            </div>
        </Nav>
    )
}

const Nav = styled.div`
    height: 60px;
    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    font-size: 1.2rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    align-items:center ;
  `;

export default Navbar