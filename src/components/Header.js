import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../img/logo.png'
import { 
    Input,
    Icon,
    Label
 } from 'semantic-ui-react'




class Header extends React.Component {
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

    calProduct(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++){
            result += arr[i].quantity; 
        }
        return result;
    }

    render() {
        let temp = this.props.cart || [];
        let result = this.calProduct(temp);
        return (
            <div style={{ backgroundColor: "white" }}>
                <Container>
                    <Navbar  light expand="md">
                        <Link className="navbar-brand" to="/">
                                <img src={logo} height="100px" width="100px" alt="Logo"></img>
                        </Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar >
                                <NavItem className="ml-3">
                                    <Input icon='search' placeholder='Search...' />
                                </NavItem>
                                <NavItem className="ml-3"> 
                                    <Link to="/cart" className="nav-link">
                                        <Icon className="position-relative" size="big" name='shopping cart'>
                                            <Label style={{ top:"0", left: "2rem"}} className="position-absolute" size="small" circular color="green">{result}</Label>        
                                        </Icon>                                                                                                                             
                                    </Link>
                                </NavItem>
                                <NavItem className="ml-3">
                                    <NavLink href="#"><h5>Đăng nhập</h5></NavLink>
                                </NavItem>
                                <NavItem className="ml-3">
                                    <NavLink href="#"><h5>Đăng ký</h5></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart,
    }
};

export default connect(mapStateToProps, null)(Header);