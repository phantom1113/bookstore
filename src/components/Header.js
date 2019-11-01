import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import logo from '../img/logo.png'
import { logout } from '../actions/auth';
import SearchBar2 from './SearchBar2';
import { 
    Icon,
    Label,
    Image
 } from 'semantic-ui-react'




class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.groupOption = this.groupOption.bind(this);
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

    checkAuth(){
        let temp 
        if(this.props.auth.token===null){
            temp = this.props.cart || [];
        }else{
            temp = this.props.auth.user.cart || [];
        }
        return temp;
    } 
    
    groupOption(){
        return(
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                    <Image src='https://dreambuildersproduction.com/wp-content/uploads/2015/03/myAvatar-7.png' size='mini' circular />
            </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem onClick={() => this.props.onLogout()}>
                        <Link className="nav-link" to="/"><h5>Đăng xuất</h5></Link>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link className="nav-link" to="/user"><h5>Thông tin tài khoản</h5></Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        let temp = this.checkAuth();
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
                                    <SearchBar2 history = {this.props.history}/>
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
                                        <Link to="#" className="nav-link disabled"><h5><b>Welcom {user.name}</b></h5></Link> : <Link className="nav-link" to="/login"><h5>Đăng nhập</h5></Link>
                                    }
                                </NavItem>
                                <div className="ml-3 nav-item">
                                    {     
                                        user ?
                                        <this.groupOption/> : <Link className="nav-link" to="/register"><h5>Đăng kí</h5></Link>
                                    }                                    
                                </div>
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
  

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));