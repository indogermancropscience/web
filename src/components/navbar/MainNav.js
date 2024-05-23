import React from 'react'

import "./MainNav.scss"
import {menu} from "../menu/Menu"
import { Container,Navbar,NavDropdown,Nav } from 'react-bootstrap';
function MainNav() {

    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="./logo300x300.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>

                    <Navbar.Brand href="#home">
                        Indo German
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {menu &&
                                menu.map((m, key) => {
                                    if (m.options.length === 0) {
                                        return (
                                            <Nav.Link key={key} href={m.url}>{m.name}</Nav.Link>
                                        )
                                    } else {
                                        return (
                                            <NavDropdown key={key} title={m.name} id="collasible-nav-dropdown">
                                                {m.options &&
                                                    m.options.map((o, key1) => {
                                                        return (
                                                            <>
                                                                <NavDropdown.Item key={key1}href={o.url}>{o.name}</NavDropdown.Item>
                                                                <NavDropdown.Divider key={key1} />

                                                            </>
                                                        )
                                                    })

                                                }

                                            </NavDropdown>
                                        )
                                    }
                                })

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}
export default MainNav;