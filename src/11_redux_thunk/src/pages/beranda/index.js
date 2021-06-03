import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../parts/header'
import Logo from '../../logo.svg';

export default class Beranda extends React.Component {
    render() {
        return (
            <div class="container">
                <row>
                    <Header />
                    <br />
                    <br />
                    <div align="center">
                        <Card style={{ width: '25rem' }} align="center">
                            <Card.Img variant="top" src={Logo} />
                            <Card.Body>
                                <Card.Title>Pemrograman Berbasis Framework</Card.Title>
                                <Card.Text>
                                    1. Konsep dan implementasi Global API<br/>
                                    2. Konsep dan implementasi Hooks
                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </row>
            </div >
        );
    }
}