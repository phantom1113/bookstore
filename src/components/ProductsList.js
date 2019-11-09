import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBook, getItemPerPage } from './../actions/index';
import Item from './Item';
import Rank from './Rank';


class ProductsList extends React.Component {
    componentDidMount() {
        this.props.onGetBooks();
    }

    showItem(books,category){
        let arr = [];
        for( let i = 0; i < books.length; i++){
            if(books[i].category === category)
            {
                arr.push(books[i]);
            }
        }
        return arr.slice(0,4);
    }

    render(){
        const { books } = this.props.books;
        return(
            <Container>
                <Row>
                    <Col md="8">
                        <Link className="cus-link" to="/category/Sách Kinh Tế" onClick={() => this.props.onGetItemPerPage('Sách Kinh Tế',1) }>
                            <h4><u>Sách Kinh Tế</u></h4>
                        </Link>
                        <Row>
                            {  
                                this.showItem(books,"Sách Kinh Tế").map(book => {
                                    return <Item key={book._id} product={book} />
                                }
                                )
                            }
                        </Row>
                        <Link className="cus-link" to="/category/Văn học Việt Nam" onClick={() => this.props.onGetItemPerPage('Văn học Việt Nam',1)}>
                            <h4><u>Sách Văn Học Việt Nam</u></h4>
                        </Link>
                        <Row>
                            {
                                this.showItem(books,"Văn học Việt Nam").map(book => {
                                    return <Item key={book._id} product={book} />
                                }
                                )
                            }
                        </Row>
                        <Link className="cus-link" to="/category/Văn học nước ngoài" onClick={() => this.props.onGetItemPerPage('Văn học nước ngoài',1)}>
                            <h4><u>Sách Văn Học Nước Ngoài</u></h4>
                        </Link>
                        <Row>
                            {
                                this.showItem(books,"Văn học nước ngoài").map(book => {
                                    return <Item key={book._id} product={book} />
                                }
                                )
                            }
                        </Row>
                    </Col>
                    <Col md="4">
                        <Row className="ml-2">
                            <Rank />
                        </Row>
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
        onGetBooks: (category = '') => {
            dispatch(getBook(category));
        },
        onGetItemPerPage: (category,page) => {
            dispatch(getItemPerPage(category,page));
        }
    }
}

ProductsList.propTypes = {
    books: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);