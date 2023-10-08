import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css"

const Navegacion = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no_active");

    return (
        <Navbar className="bg-body-tertiary" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://www.pngplay.com/wp-content/uploads/10/Pokemon-PNG-Free-File-Download.png"
                        width="60"
                        height="50"
                        className="d-inline-block align-top"
                    />{'     '}
                    <NavLink className={setActiveClass} to="/">Home</NavLink>
                    {'      '}
                    <NavLink className={setActiveClass} to="/pokemones">Pokemones</NavLink>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Navegacion;
