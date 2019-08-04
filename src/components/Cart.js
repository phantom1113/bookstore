import React from 'react'
import { Container,Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Image, List, Label, Input } from 'semantic-ui-react'



export default class ProductsList extends React.Component {
    render(){
        return(
            <Container>
                <Row className='mt-2'>
                    <Col md="8">
                        <List divided verticalAlign='middle'>
                            <List.Item>
                                <List.Content floated='right'>
                                    <Button icon='close'/>
                                </List.Content>
                                <Image src='https://salt.tikicdn.com/cache/175x175/media/catalog/product/i/m/img117.u3059.d20170616.t100547.729023.jpg' />
                                <List.Content>
                                    <List relaxed>
                                        <List.Item>Nhà Giả Kim</List.Item>
                                        <List.Item>48850đ</List.Item>
                                        <List.Item><strike>69000đ</strike><Label color='red'>-20%</Label></List.Item>
                                        <List.Item>                                    
                                            <Button icon='minus'/>
                                            <Input style={{width: "20%"}} size='small' defaultValue='1' />
                                            <Button style={{ marginLeft: ".25rem" }} icon='plus' />
                                        </List.Item>
                                    </List>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Col>
                    <Col md="4">
                        <ListGroup>
                            <ListGroupItem>
                                <div className="clearfix" style={{ padding: '.5rem' }}>
                                    <p className="float-left"><h5>Tạm tính:</h5></p>
                                    <p className="float-right" style={{fontSize:"1.5rem"}}><p><strong> 48850đ</strong></p></p>
                                </div>
                            </ListGroupItem>
                            <ListGroupItem>
                                <div className="clearfix" style={{ padding: '.5rem' }}>
                                    <p className="float-left"><h5>Thành tiền: </h5></p>
                                    <p className="float-right text-danger" style={{fontSize:"1.5rem"}}><p><strong>48850đ</strong></p></p>
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

