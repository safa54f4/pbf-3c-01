import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/artikel">Artikel</Nav.Link>
                        <Nav.Link href="/comment">List Komentar</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}