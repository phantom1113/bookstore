import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import logo from '../img/logo.png'
import { 
    Input,
    Icon
 } from 'semantic-ui-react'




export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div style={{ backgroundColor: "white" }}>
                <Container>
                    <Navbar  light expand="md">
                        <NavbarBrand href="/">
                            <img src={logo} height="100px" width="100px" alt="Logo"></img>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Input icon='search' placeholder='Search...' />
                                </NavItem>
                                <NavItem>
                                    <NavLink><Icon name='shopping cart' /></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Đăng nhập</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Đăng ký</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        );
    }
}
