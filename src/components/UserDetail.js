import React from 'react'
import { connect } from 'react-redux';
import { Container,Row, Col, Table, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Input  } from 'reactstrap';
import { Card, Icon } from 'semantic-ui-react';
import { ChangePassword } from '../actions/auth';
import { clearError } from '../actions/error';
import { Alert } from 'reactstrap';
import * as Types from '../actions/types';


class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            account: true,
            changepassword: 'none',
            history: 'none',
            oldpassword: '',
            newpassword: '',
            verifynewpassword: '',
            msg: null
        };
        this.handleClick = this.handleClick.bind(this);
      }
    
    componentDidUpdate(prevProps) {
        if (this.props.error !== prevProps.error) {
            if (this.props.error.id === Types.CHANGE_PASSWORD_FAIL) {
                this.setState({ msg: this.props.error.msg.msg });
            }
            else if(this.props.error.id === Types.CHANGE_PASSWORD_SUCCESS){
                this.props.history.goBack();
            }else 
            {
                this.setState({ msg: null });
            }
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }
    
    onSubmit = e => {
        e.preventDefault();
        const { oldpassword, newpassword, verifynewpassword } = this.state;
        if(newpassword===verifynewpassword){
            this.props.onChangePassword(this.props.auth.user._id, oldpassword, newpassword);
        }else{
            this.setState({ msg: 'New password and verify password is different' })
        }
    }

    toggle = (e) => {
        this.props.onClearError();
        e.target.value = '';
    }

    handleClick(e){
        e.preventDefault();
        if(e.target.value === "Tài khoản"){
            this.setState({
                account: true,
                changepassword: 'none',
                history: 'none'
            });
        }
        if(e.target.value === "Đổi mật khẩu" ){
            this.setState({
                account: 'none',
                changepassword: true,
                history: 'none'
            });
        }
        if(e.target.value === "Lịch sử mua hàng"){
            this.setState({
                account: 'none',
                changepassword: 'none',
                history: true
            });
        }
        if(e.target.value === "Giỏ hàng"){
            this.props.history.push('/cart');
        }
    }

    userAuth = () =>{
        return(
            <Container className="m-auto">
                <Row className="mt-2">
                    <Col md="5">
                        <Row className='justify-content-center'>
                            <Card
                                image='https://dreambuildersproduction.com/wp-content/uploads/2015/03/myAvatar-7.png'
                                header='Bob Baker'
                                meta='Customer'
                            />
                        </Row>
                        <Row className="mt-5 justify-content-center" style={{ fontSize: "2.3rem" }}>
                            <ListGroup >
                                <ListGroupItem tag="button" value="Tài khoản" onClick={this.handleClick} action>Tài khoản</ListGroupItem>
                                <ListGroupItem tag="button" value="Đổi mật khẩu" onClick={this.handleClick} action>Đổi mật khẩu</ListGroupItem>
                                <ListGroupItem tag="button" value="Giỏ hàng" onClick={this.handleClick} action>Giỏ hàng</ListGroupItem>
                                <ListGroupItem tag="button" value="Lịch sử mua hàng" onClick={this.handleClick} action>Lịch sử mua hàng</ListGroupItem>
                            </ListGroup>
                        </Row>
                    </Col>
                    <Col md="7" style={{ fontSize: '1.8rem' }}>
                        <Row>
                            <Table style={{ display: this.state.account }} borderless>
                                <tbody>
                                    <tr>
                                        <td><Icon name='user' /></td>
                                        <td>{this.props.auth.user.name}</td>
                                    </tr>
                                    <tr>
                                        <td><Icon name='mail' /></td>
                                        <td>{this.props.auth.user.email}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <Row>
                            <Form style={{ display: this.state.changepassword }} onSubmit={this.onSubmit}>
                                {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : null}
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label style={{ fontSize: '1.8rem' }} for="oldpassword" className="mr-sm-2">Old Password</Label>
                                    <Input style={{ fontSize: '1.8rem' }} onClick={this.toggle} onChange={this.onChange} type="password" name="oldpassword" id="oldpassword" />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label style={{ fontSize: '1.8rem' }} for="newpassword" className="mr-sm-2">New Password</Label>
                                    <Input style={{ fontSize: '1.8rem' }} onClick={this.toggle} onChange={this.onChange} type="password" name="newpassword" id="newpassword" />
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label style={{ fontSize: '1.8rem' }} for="verifynewpassword" className="mr-sm-2">Verify New Password</Label>
                                    <Input style={{ fontSize: '1.8rem' }} onClick={this.toggle} onChange={this.onChange} type="password" name="verifynewpassword" id="verifynewpassword" />
                                </FormGroup>
                                <Button className='mt-3' style={{ fontSize: '1.8rem' }}>Submit</Button>
                            </Form>
                        </Row>
                        <Row>
                            <h1 style={{ display: this.state.history }}>Lịch sử mua hàng</h1>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }

    userNoAuth(){
        return <Container style={{marginBottom:"25%"}}><h1>Bạn chưa đang nhập</h1></Container>
    }

    render(){ 
        return(
            this.props.auth.token === null ? <this.userNoAuth/> : <this.userAuth/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
      onChangePassword: (id, oldpassword, newpassword) => {
        dispatch(ChangePassword({id, oldpassword, newpassword}));
      },
      onClearError: () => {
        dispatch(clearError());
      }
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(UserDetail);

