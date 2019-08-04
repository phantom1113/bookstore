import React from 'react';
import { Link } from 'react-router-dom'
import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem
} from 'reactstrap';





export default class Banner extends React.Component {
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
    render() {
        return (
            <div style={{ backgroundColor: "white" , marginBottom: "1rem"}}>
                <Container>
                    <Row>
                        <Col xs="12" md="3">
                            <ListGroup>
                                <ListGroupItem disabled tag="a" href="#" action><h4 className="text-success">Danh mục sách</h4></ListGroupItem>
                                <Link className="list-group-item-action list-group-item" to="/category">Sách Bán Chạy</Link>
                                <Link className="list-group-item-action list-group-item" to="/category">Sách Mới Phát Hành</Link>
                                <Link className="list-group-item-action list-group-item" to="/category">Sách Sắp Phát Hành</Link>
                                <Link className="list-group-item-action list-group-item" to="/category">Sách Ngoại Văn</Link>
                                <Link className="list-group-item-action list-group-item" to="/category/Sách Kinh Tế">Sách Kinh Tế</Link>
                                <Link className="list-group-item-action list-group-item" to="/category/Văn học Việt Nam">Sách Văn Học Trong Nước</Link>
                                <Link className="list-group-item-action list-group-item" to="/category">Sách thiếu nhi</Link>
                                <Link className="list-group-item-action list-group-item" to="/category">Sách Tin Học-Ngoại Ngữ</Link>                              
                                <Link className="list-group-item-action list-group-item" to="/category">Sách Giáo Khoa - Giáo Trình</Link>
                                <Link className="list-group-item-action list-group-item" to="/category/Văn học nước ngoài">Sách Văn Học Nước Ngoài</Link>
                                <Link className="list-group-item-action list-group-item" to="/category">Sách Thường Thức-Đời Sống</Link>
                            </ListGroup>
                        </Col>
                        <Col xs="12" md="9" style={{paddingLeft:"0"}}>
                            <Row>
                                <Col md="8" style={{paddingLeft: "0",paddingRight:"0"}}>
                                    <img className="img-fluid" src="https://www.vinabook.com/images/thumbnails/promo/802x480/340762_desktop2ggd-xl.jpg" alt="img1"></img>
                                </Col>
                                <Col md="4" style={{paddingLeft: "0",paddingRight:"0"}}>
                                    <Row>
                                        <Col>
                                            <img className="img-fluid" src="https://www.vinabook.com/images/thumbnails/promo/802x480/340790_desktop2fp0-tg.jpg" alt="img2"></img>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <img className="img-fluid" src="https://www.vinabook.com/images/thumbnails/promo/802x480/341780_desktopw4sd-88.jpg" alt="img2"></img>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4" style={{paddingLeft: "0",paddingRight: "0"}}>
                                    <img className="img-fluid" src="https://www.vinabook.com/images/thumbnails/promo/802x480/341784_desktopbxm6-a7.jpg" alt="img3"></img>
                                </Col>
                                <Col md="4" style={{paddingLeft: "0",paddingRight:"0"}}>
                                    <img className="img-fluid" src="https://www.vinabook.com/images/thumbnails/promo/802x480/341252_desktop.jpg" alt="img3"></img>
                                </Col>
                                <Col  md="4" style={{paddingLeft: "0",paddingRight:"0"}}>
                                    <img className="img-fluid" src="https://www.vinabook.com/images/thumbnails/promo/802x480/339082_desktop.jpg" alt="img3"></img>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
