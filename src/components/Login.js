import React from 'react'
import * as Types from '../actions/types';
import { connect } from 'react-redux';
import { Login } from '../actions/auth';
import { clearError } from '../actions/error';
import { Alert } from 'reactstrap';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class LoginModal extends React.Component {
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
    console.log(error,prevProps.error);
    if (error !== prevProps.error) {
      if (error.id === Types.LOGIN_FAIL) {
        this.setState({ msg: error.msg.msg })
      } else {
        this.setState({ msg: null })
      }
    }

    //if authenticated close modal
    // if (this.state.modal) {
    //   if (isAuthenticated) {
    //     this.toggle();
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
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = { email, password };
    this.props.onLogin(user);
  }
  render() {
    console.log(this.state.msg);
    return (
      <Grid textAlign='center' style={{ height: '100vh',marginTop:"1rem"}} verticalAlign='top'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>Log-in to your account</Header>
          {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>) : null}
          <Form size='large' onSubmit={this.onSubmit}>
            <Segment stacked>
              <Form.Input fluid onChange={this.onChange} name="email" icon='email' iconPosition='left' placeholder='E-mail address' />
              <Form.Input fluid onChange={this.onChange} name="password" icon='lock' iconPosition='left' placeholder='Password' type='password' />
              <Button color='teal' fluid size='large'>Login</Button>
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
    onClearError: () => {
      dispatch(clearError());
    },
    onLogin: user => {
      dispatch(Login(user));
    }
  }
}

export default connect(mapStateToPorps,mapDispatchToProps)(LoginModal);