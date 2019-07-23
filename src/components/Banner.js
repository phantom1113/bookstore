import React from 'react';
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
            <div style={{ backgroundColor: "white" }}>
                <Container>
                    <Row>
                        <Col xs="12" md="3">
                            <ListGroup>
                                <ListGroupItem tag="a" href="#" action>Sách Bán Chạy</ListGroupItem>
                                <ListGroupItem tag="a" href="#" action>Sách Mới Phát Hành</ListGroupItem>
                                <ListGroupItem tag="a" href="#" action>Sách Sắp Phát Hành</ListGroupItem>
                                <ListGroupItem tag="a" href="#" action>Sách Ngoại Văn</ListGroupItem>
                                <ListGroupItem tag="a" href="#" action>Sách Kinh Tế</ListGroupItem>
                                <ListGroupItem tag="a" href="#" action>Sách Văn Học Trong Nước</ListGroupItem>
                                <ListGroupItem tag="a" href="#" action>Sách thiếu nhi</ListGroupItem>
                                <ListGroupItem tag="a" href="#" action>Sách Tin Học-Ngoại Ngữ</ListGroupItem>
                                <ListGroupItem tag="a" href="#" action>Sách Chuyên Ngành</ListGroupItem>
                                <ListGroupItem tag="a" href="#" action>Sách Giáo Khoa - Giáo Trình</ListGroupItem>
                                <ListGroupItem tag="a" href="#" action>Sách Văn Học Nước Ngoài</ListGroupItem>
                                <ListGroupItem tag="a" href="#" action>Sách Thường Thức-Đời Sống</ListGroupItem>
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
