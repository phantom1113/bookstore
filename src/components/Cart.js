import React from 'react'
import { Container,Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Image, List, Label, Input } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { actRemoveProductInCart, actUpdateProductInCart } from '../actions/cart';




class Cart extends React.Component {
 
    componentDidMount(){
        
    }
    
    calPrice(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++){
            result += arr[i].product.newprice*arr[i].quantity; 
        }
        return result;
    }

    DeleteProductInCart(product) {
        this.props.onDeleteProductInCart(product);
    }

    UpdateProductInCart(product,quantity){
        if(quantity > 0) {
            this.props.onUpdateProductInCart(product,quantity);
        }
    }

    render(){
        let temp = this.props.cart || [];
        console.log(temp);
        let result = this.calPrice(temp);
        return(
            <Container>
                <Row className='mt-2'>
                    <Col md="8">
                        <List divided verticalAlign='middle'>
                            {
                                temp.map(item => {
                                    console.log(item);
                                    return (
                                        <List.Item>
                                            <List.Content floated='right'>
                                                <Button icon='close' onClick={() => this.DeleteProductInCart(item.product) }/>
                                            </List.Content>
                                            <Image src={item.product.image} />
                                            <List.Content>
                                                <List relaxed>
                                                    <List.Item>{item.product.name}</List.Item>
                                                    <List.Item>{item.product.newprice}VNĐ</List.Item>
                                                    <List.Item><strike>{item.product.oldprice}VNĐ</strike><Label color='red'>-{item.product.percentdis}%</Label></List.Item>
                                                    <List.Item>
                                                        <Button onClick={() => this.UpdateProductInCart(item.product,item.quantity-1)} icon='minus' />
                                                        <Input style={{ width: "20%" }} size='small' value={item.quantity} />
                                                        <Button onClick={() => this.UpdateProductInCart(item.product,item.quantity+1)} style={{ marginLeft: ".25rem" }} icon='plus' />
                                                    </List.Item>
                                                </List>
                                            </List.Content>
                                        </List.Item>
                                    )
                                })
                            }
                        </List>
                    </Col>
                    <Col md="4">
                        <ListGroup>
                            <ListGroupItem>
                                <div className="clearfix" style={{ padding: '.5rem' }}>
                                    <p className="float-left"><h5>Tạm tính:</h5></p>
                                    <p className="float-right" style={{fontSize:"1.5rem"}}><p><strong>{result} VNĐ</strong></p></p>
                                </div>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="clearfix" style={{ padding: '.5rem' }}>
                                    <p className="float-left"><h5>Thành tiền: </h5></p>
                                    <p className="float-right text-danger" style={{fontSize:"1.5rem"}}><p><strong>{result} VNĐ</strong></p></p>
                                </div>
                                <div>
                                    <p className="float-right">(Đã bao gồm VAT)</p>
                                </div>
                            </ListGroupItem>
                        </ListGroup>
                        <Button color='green' style={{width:"100%"} }>Tiến hành đặt hàng</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actRemoveProductInCart(product));
        },
        onUpdateProductInCart : (product,quantity) => {
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);