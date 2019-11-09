import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import { List, Icon } from 'semantic-ui-react'

export default class Header extends React.Component {
    render() {
        return (
            <div className='background-footer'>
                <Container style={{paddingLeft:"1.5rem",marginTop:"2rem"}}>
                    <Row>
                        <Col xs="12" md="4" style={{marginTop:"1rem",textAlign:"center"}}>
                            <List relaxed>
                                <List.Header><h3>Thông tin liên lạc</h3></List.Header>
                                <List.Item>
                                    <List.Icon color='blue' size="large" name='marker' />
                                    <List.Content>452/45 Hai Bà Trưng, F.Bến Nghé, Q.1, TPHCM</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon color='blue' size="large" name='mail' />
                                    <List.Content>
                                        <Link className= "cus-link" to="mailto:bookstore@gmail.com.com">bookstore@gmail.com</Link>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon color='blue' size="large" name='linkify' />
                                    <List.Content>
                                        <Link className= "cus-link" to="http://www.semantic-ui.com">bookstore.com</Link>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Col>
                        <Col xs="12"  md="4" style={{marginTop:"1rem",textAlign:"center"}}>
                            <List relaxed>
                                <List.Header><h3>Trợ Giúp</h3></List.Header>
                                <List.Item>
                                    <List.Content >
                                        <Link className= "cus-link" to="/">Hướng Dẫn Đặt Hàng</Link>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <Link className= "cus-link" to="/">Phương Thức Vận Chuyển</Link>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <Link className= "cus-link" to="/">Chính Sách Đổi Trả</Link>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        <Link className= "cus-link" to="/">Phương Thức Thanh Toán</Link>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Col>
                        <Col xs="12"  md="4" style={{marginTop:"1rem",textAlign:"center"}}>
                                    <h3>Liên lạc với chúng tôi</h3>
                                    <Icon color='blue' size="big" name='facebook f' />
                                    <Icon color='blue' size="big" name='instagram' />
                                    <Icon color='blue' size="big" name='youtube play' />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{padding:"2rem", textAlign:"center", marginTop:"2rem"}}>
                            <List relaxed>
                                    <h3>Phương thức thanh toán</h3>
                                    <Icon color='blue' size="huge" name='cc visa' />
                                    <Icon color='blue' size="huge" name='cc mastercard' />
                                    <Icon color='blue' size="huge" name='cc jcb' />
                                    <Icon color='blue' size="huge" name='money' />
                            </List>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{padding:"2rem", textAlign:"center"}}>
                            <h5>Copyright &copy; Your Website</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
