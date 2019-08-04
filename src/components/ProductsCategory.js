import React from 'react'
import { Container,Row, Col, Button } from 'reactstrap';
import Item from './Item';
import { connect } from 'react-redux';
import { getBook, decreasePrice, increasePrice } from './../actions/index';

class ProductsCategory extends React.Component {
    componentDidMount(){
        this.props.onGetBooks(this.props.match.params.id);
    }
    onDecreasePrice(books){
        this.props.onDecreasePrice(books);
    }
    onIncreasePrice(books){
        this.props.onIncreasePrice(books);
    }
    render(){
        let { books } = this.props.books;
        return(

            <Container>
                <Row className='mt-2'>
                    <Col>
                        <h5 className="text-success">Sắp xếp theo: </h5>
                        <Button outline color="success" onClick={() => this.onIncreasePrice(books)}>Giá từ cao đến thấp</Button>{' '}
                        <Button outline color="success" onClick={() => this.onDecreasePrice(books)}>Giá từ thấp đến cao</Button>{' '}
                        <Row>
                            {
                                books.map(product => (
                                    <Item key={product.id} product={product} />
                                ))
                            }
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
        onDecreasePrice: (books) => {
            dispatch(decreasePrice(books));
        },
        onIncreasePrice: (books) => {
            dispatch(increasePrice(books));
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(ProductsCategory);