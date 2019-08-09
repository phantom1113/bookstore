import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from '../img/logo.png'
import { logout } from '../actions/auth';
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
        const { user } = this.props.auth;
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
                                    {     
                                        user ?
                                        <Link className="nav-link disabled"><h5><b>Welcom {user.name}</b></h5></Link> : <Link className="nav-link" to="/login"><h5>Đăng nhập</h5></Link>
                                    }
                                </NavItem>
                                <NavItem className="ml-3">
                                    {     
                                        user ?
                                        <Link className="nav-link " onClick={() => this.props.onLogout()}><h5>Đăng xuất</h5></Link> : <Link className="nav-link" to="/register"><h5>Đăng kí</h5></Link>
                                    }                                    
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
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
      onLogout: () => {
        dispatch(logout());
      }
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Header);