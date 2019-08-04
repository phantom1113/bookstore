import React from 'react'
import { Container,Row, Col,Card, CardText, CardBody, CardSubtitle, Button,Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getBookDetail } from './../actions/index';
import { Icon, List, Divider, Image, ListHeader, ListItem } from 'semantic-ui-react';



class ProductDetail extends React.Component {
    componentDidMount(){
        this.props.onGetBookDetail(this.props.match.params.id);
    }

    convertObject(arr) {
        var result = {};
        for (var i = 0; i < arr.length; i++) {
            result[arr[i].key] = arr[i].value;
        }
        return result;       
    }

    render(){
        const book= this.props.books.book || {};
        console.log(book)
        return(
            <Container>
                <Row className="mt-2">
                    <Col md="3">
                        <Image src={book.image} size='medium' rounded />
                    </Col>
                    <Col md="6" style={{padding:"1rem"}}>
                        <List>
                            <List.Header style={{padding:"1rem"}}><h3>{book.name}</h3></List.Header>
                            <List.Item style={{padding:"1rem"}}><h5>{book.author}</h5></List.Item>
                            <List.Item style={{padding:"1rem"}}>
                                Chia sẻ:
                                <Icon color='blue' style={{padding:"1rem"}} size="large" name="facebook f"></Icon>
                                <Icon color='blue' style={{padding:"1rem"}} size="large" name="twitter"></Icon>
                                <Icon color='blue' style={{padding:"1rem"}} size="large" name="instagram"></Icon>
                            </List.Item>
                            <Divider section />   
                            <List.Item><h4>Thông tin kèm theo</h4></List.Item>
                        </List>
                    </Col>
                    <Col md="3">
                    <Card>
                            <CardBody>
                                <List relaxed size={'large'}>
                                    <ListHeader><h4>Thông tin thanh toán</h4></ListHeader>
                                    <ListItem>Giá bán :   <strike>{book.oldprice}VNĐ</strike></ListItem>
                                    <ListItem>Giá khuyến mãi : <span className="text-danger"><b>{book.newprice}VNĐ</b></span></ListItem>
                                    <ListItem>Tiết kiệm : <span className="text-success">{book.oldprice - book.newprice}VNĐ</span></ListItem>
                                    <ListItem>Còn hàng</ListItem>
                                </List>
                                <Divider section /> 
                                <Button color="primary">Mua hàng</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="8" style={{padding:"1rem"}}>
                        <h3>Giới thiệu sách</h3>
                        <Card>
                            <CardBody>
                                <CardSubtitle><h5>{book.name}</h5></CardSubtitle>
                                <CardText className="pt-2">Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con người.</CardText>
                                <CardText>Tiểu thuyết Nhà giả kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái, giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông. Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho toàn nhân loại, vượt ra ngoài biên giới quốc gia, Nhà giả kim đã làm rung động hàng triệu tâm hồn, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời người đọc.</CardText>
                                <CardText>“Nhưng nhà luyện kim đan không quan tâm mấy đến những điều ấy. Ông đã từng thấy nhiều người đến rồi đi, trong khi ốc đảo và sa mạc vẫn là ốc đảo và sa mạc. Ông đã thấy vua chúa và kẻ ăn xin đi qua biển cát này, cái biển cát thường xuyên thay hình đổi dạng vì gió thổi nhưng vẫn mãi mãi là biển cát mà ông đã biết từ thuở nhỏ. Tuy vậy, tự đáy lòng mình, ông không thể không cảm thấy vui trước hạnh phúc của mỗi người lữ khách, sau bao ngày chỉ có cát vàng với trời xanh nay được thấy chà là xanh tươi hiện ra trước mắt. ‘Có thể Thượng đế tạo ra sa mạc chỉ để cho con người biết quý trọng cây chà là,’ ông nghĩ.”</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" style={{padding:"1rem"}}>
                        <h3>Thông tin chi tiết</h3>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <th scope="row">Tác giả</th>
                                    <td>{book.author}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Nhà Xuất Bản</th>
                                    <td>Nhà Xuất Bản Văn Học</td>
                                </tr>
                                <tr>
                                    <th scope="row">Ngày Xuất Bản</th>
                                    <td> 10-2013 </td>
                                </tr>
                                <tr>
                                    <th scope="row">Kích thước</th>
                                    <td> 13 x 20.5 cm </td>
                                </tr>
                                <tr>
                                    <th scope="row">Số trang</th>
                                    <td>228</td>
                                </tr>
                                <tr>
                                    <th scope="row">SKU</th>
                                    <td>2518407786529</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>          
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetBookDetail: (id) => {
            dispatch(getBookDetail(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
