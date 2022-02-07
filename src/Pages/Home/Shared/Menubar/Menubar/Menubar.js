import React from 'react';
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../../images/logo.png";

const Menubar = () => {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
            style={{ height: "70px" }}
        >
            <Container>
                <NavLink to="/">
                    <img src={logo} alt="" />
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link style={{ textDecoration: "none", color: "white" }} to="/home">
                            HOME
                        </Link>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                            to="/allProduct"
                            className="px-3"
                        >
                            PRODUCTS
                        </Link>
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/dashboard"
                        >
                            DASHBOARD
                        </Link>
                    </Nav>
                    <Nav>
                        <>
                            <NavLink
                                to="/login"
                                className="text-warning px-2"
                                style={{ fontSize: "25px", textDecoration: "none" }}
                            >
                                Login  <BsPersonCircle />
                            </NavLink>
                            /
                            <Link
                                to="/cart"
                                className="text-warning"
                                style={{ fontSize: "25px" }}
                            >
                                <FaShoppingCart />
                                <Badge style={{ fontSize: "10px" }} bg="danger">
                                    0
                                </Badge>
                            </Link>
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menubar;