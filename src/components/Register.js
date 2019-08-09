import React from 'react';
import logo from '../img/logo.png';
import * as Types from '../actions/types';
import { Register } from '../actions/auth';
import { connect } from 'react-redux';
import { clearError } from '../actions/error';
import { Alert } from 'reactstrap';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      email: '',
      password: '',
      msg: null
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      if (error.id === Types.REGISTER_FAIL) {
        this.setState({ msg: error.msg.msg })
      } else {
        this.setState({ msg: null })
      }
    }

    //if authenticated close modal
    // if(this.state.modal){
    //   if(isAuthenticated) {
    //     //this.toggle();
    //   }
    // }
    if(isAuthenticated){
      this.props.history.goBack();
    }
  }

  toggle = () => {
    this.props.onClearError();
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  
  onChange = (e) => {
      this.setState({ [e.target.name] : e.target.value})
  }

  onSubmit = e => {
      e.preventDefault();
      
      const { name, email, password} = this.state;

      //Create user object
      const newUser = {
        name,
        email,
        password
      };
      //Attemp to register
      this.props.onRegister(newUser);

  }

  render(){
    
    return(
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={logo} /> Register your account
        </Header>
        {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : null}
        <Form size='large' onSubmit={this.onSubmit}>
          <Segment stacked>
            <Form.Input  onChange={this.onChange} name="name" fluid icon='user' iconPosition='left' placeholder='Username' />
            <Form.Input  onChange={this.onChange} name="email" fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
            <Form.Input  onChange={this.onChange} name="password" fluid icon='lock' iconPosition='left' placeholder='Password'  type='password'/>  
            <Button color='teal' fluid size='large'>
              Register
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
    );
  }
}

const mapStateToPorps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    onRegister: (newUser) => {
      dispatch(Register(newUser.name, newUser.email, newUser.password));
    },
    onClearError: () => {
      dispatch(clearError());
    }
  }
}


export default connect(mapStateToPorps, mapDispatchToProps)(RegisterModal);
