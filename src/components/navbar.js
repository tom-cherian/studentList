import React from 'react'
import { Link } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap'

export default function Navbar() {
    return (
        <>
        <h2 style={{color: "red"}}>Welcome to Students List</h2>
        <Nav tab="true" >
            <NavItem>
                <Link to="/"> Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/studentTable">Student List</Link>
            </NavItem>
            <NavItem>
                <Link to="/addStudent">Add Student</Link>
            </NavItem>
        </Nav>
        </>
    )
}
