import React from 'react';
import { connect } from 'react-redux';
import {Container} from 'reactstrap';
import { Checkout } from '../actions/auth';
import { clearError } from '../actions/error';
import { Step, Form, Button, Select, Table } from 'semantic-ui-react'

const CityOptions = [
    { key: 'af', value: 'Hồ Chí Minh', text: 'Hồ Chí Minh' },
  ]

const DistrictOptions = [
    { key: 'Q1', value: 'Quận 1', text: 'Quận 1' },
    { key: 'Q2', value: 'Quận 2', text: 'Quận 2' },
    { key: 'QPN', value: 'Quận Phú Nhuận', text: 'Quận Phú Nhuận' },
    { key: 'QGV', value: 'Quận Gò Vấp', text: 'Quận Gò Vấp' },
]


class LoginModal extends React.Component {
  steps = [
    {
      key: 'Địa chỉ',
      active: true,
      icon: 'home',
      title: 'Địa chỉ',
      description: 'Điền đĩa chỉ của bạn',
    },
    {
      key: 'Phương thức thanh toán',
      active: false,
      icon: 'payment',
      title: 'Phương thức thanh toán',
      description: 'Chọn phương thức thanh toán',
    },
    { 
        key: 'Xác nhận',
        active: false,  
        icon: 'info', 
        title: 'Xác nhận' },
  ]

  display = [{value: ""},{value:"none"},{value:"none"}]

  constructor(props) {
    super(props);
    this.state = {
      temp : 0,
      value: '',
      city:'',
      district:'',
      address: ''
    }
  }

  handleChange = (e, { value }) => this.setState({ value });

  handleStep = () => {
      this.steps[this.state.temp].active = false;
      if(this.state.temp < this.steps.length - 1){
        this.display[this.state.temp].value = "none"
        this.display[this.state.temp + 1].value = ""
        this.steps[this.state.temp + 1].active = true;
        this.setState({temp: this.state.temp + 1});
      }
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }

  onCheckout = (sumprice) => {
      const address = this.state.address + ',' + this.state.district + ',' + this.state.city;
      this.props.onCheckout(this.props.auth.user._id,this.props.auth.user.cart,address,this.state.value, sumprice);
      this.props.history.push('/');
  }

  render() {
    const { value } = this.state;
    let sumprice = 0;
    return (
      <Container className='d-flex flex-column bd-highlight mb-3 mt-5'>
        <Step.Group items={this.steps} />
        <Form style={{display:this.display[0].value}}>
          <Form.Field>
            <label>Thành phố</label>
            <Select onChange={(e, { value }) => this.setState({city: value})} name='city' options={CityOptions} />
          </Form.Field>
          <Form.Field>
            <label>Quận</label>
            <Select onChange={(e, { value ,key}) => this.setState({district: value})} name='district' options={DistrictOptions} />
          </Form.Field>
          <Form.Field>
            <label>Địa chỉ</label>
            <input onChange={this.onChange} name='address' placeholder='Địa chỉ' />
          </Form.Field>
          <Button onClick={this.handleStep} type='submit'>Next</Button>
        </Form>
        <Form style={{display:this.display[1].value,marginBottom:"8rem"}}>
          <Form.Group>
            <Form.Field>
              <label>Size</label>
              <Form.Radio
                label="COD"
                value='COD'
                checked={value === 'COD'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="Visa"
                value='visa'
                checked={value === 'visa'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="Master card"
                value='master'
                checked={value === 'master'}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Button onClick={this.handleStep}>Next</Form.Button>
        </Form>
        <div style={{display:this.display[2].value,marginBottom:"5.5rem"}}>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3' textAlign='center'>Các sản phẩm thanh toán</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell textAlign='center'><b>Số lượng</b></Table.Cell>
                <Table.Cell textAlign='center'><b>Tên sản phẩm</b></Table.Cell>
                <Table.Cell textAlign='center'><b>Giá tiền</b></Table.Cell>
              </Table.Row>
              {this.props.auth.user.cart.map(product => {
                  sumprice += product.item.newprice*product.quantity;
                  return (
                    <Table.Row>
                      <Table.Cell textAlign='center'><b>{product.quantity}</b></Table.Cell>
                      <Table.Cell textAlign='center'><b>{product.item.name}</b></Table.Cell>
                      <Table.Cell textAlign='center'><b>{product.item.newprice*product.quantity} VNĐ</b></Table.Cell>
                    </Table.Row>
                  )
              })}
              <Table.Row>
                <Table.Cell textAlign='center'></Table.Cell>
                <Table.Cell textAlign='center'><b>Tổng cộng</b></Table.Cell>
                <Table.Cell textAlign='center'><b>{sumprice} VNĐ</b></Table.Cell>
                <Table.Cell textAlign='center'></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button type='submit' onClick={()=>this.onCheckout(sumprice)}>Submit</Button>
        </div>
      </Container>
    );
  }
}

const mapStateToPorps = state => ({
  auth : state.auth,
  error : state.error
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    onCheckout: (id,cart,address,method_payment,sumprice) => {
      dispatch(Checkout(id,cart,address,method_payment,sumprice));
    },
    onClearError: () => {
      dispatch(clearError());
    }
  }
}

export default connect(mapStateToPorps,mapDispatchToProps)(LoginModal);