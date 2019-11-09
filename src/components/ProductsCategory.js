import React from 'react'
import { Container,Row, Col, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Item from './Item';
import { connect } from 'react-redux';
import { getBook, decreasePrice, increasePrice, getItemPerPage } from './../actions/index';

class ProductsCategory extends React.Component {

    initialRenderItem(){
        let a  = [];
        if(this.props.books.bookPerPage.item && this.props.books.bookPerPage.item[0].category === this.props.match.params.category)
            return this.props.books.bookPerPage.item;
        else
            return a;
    }
    pageNumber = (temp) => {
        let a = [];
        if (this.props.books.bookPerPage.item && this.props.books.bookPerPage.item[0].category === this.props.match.params.category)
            {
                for (let i = 1; i <= temp; i++) {
                    a.push(i);
                }
            }
        return a;   
    }  

    showPageNuber = (number,currentpage) =>{
        if(number === currentpage || number === currentpage - 1 || number === currentpage + 1)
            return '';
        return 'none'
    }

    componentDidMount(){
        this.props.onGetItemPerPage(this.props.match.params.category,1)
    }
    onDecreasePrice(books){
        this.props.onDecreasePrice(books);
    }
    onIncreasePrice(books){
        this.props.onIncreasePrice(books);
    }

    render(){
        let books = this.initialRenderItem();
        return(
            <Container>
                <Row className='mt-2'>
                    <Col>
                        <h5 className="text-success">Sắp xếp theo: </h5>
                        <Button outline color="success" onClick={() => this.onIncreasePrice(books)}>Giá từ cao đến thấp</Button>{' '}
                        <Button outline color="success" onClick={() => this.onDecreasePrice(books)}>Giá từ thấp đến cao</Button>{' '}
                        <Row>
                            {
                                books.map(product => {
                                    return <Item key={product._id} product={product} />
                                })
                            }
                        </Row>
                        <Row className="d-flex justify-content-center">
                        <Pagination aria-label="Page navigation example">
                                {
                                    this.pageNumber(this.props.books.bookPerPage.total).map(number => {
                                        let classes = this.props.books.bookPerPage.currentpage === number ? true : false;
                                        if(number === 1){
                                            return (
                                                <React.Fragment key={number}>
                                                    <PaginationItem key={number-1} disabled={classes} onClick={() => this.props.onGetItemPerPage(this.props.match.params.category, 1)}>
                                                        <PaginationLink key={number-1} first />
                                                    </PaginationItem>
                                                    <PaginationItem style={{display:`${this.showPageNuber(number,this.props.books.bookPerPage.currentpage)}`}} key={number} active={classes} onClick={() => this.props.onGetItemPerPage(this.props.match.params.category, number)}>
                                                        <PaginationLink key={number}>
                                                            {number}
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                </React.Fragment>
                                            );
                                        }
                                        if(number === this.props.books.bookPerPage.total){
                                            return (
                                                <React.Fragment key={number}>
                                                    <PaginationItem style={{display:`${this.showPageNuber(number,this.props.books.bookPerPage.currentpage)}`}} key={number} active={classes} onClick={() => this.props.onGetItemPerPage(this.props.match.params.category, number)}>
                                                        <PaginationLink key={number}>
                                                            {number}
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem key={number + 1} disabled={classes} onClick={() => this.props.onGetItemPerPage(this.props.match.params.category, this.props.books.bookPerPage.total)}>
                                                        <PaginationLink last key={number + 1}/>
                                                    </PaginationItem>
                                                </React.Fragment>
                                            );
                                        }
                                        return (
                                            <PaginationItem style={{display:`${this.showPageNuber(number,this.props.books.bookPerPage.currentpage)}`}} key={number} active={classes} onClick={()=>this.props.onGetItemPerPage(this.props.match.params.category,number)}>
                                                <PaginationLink key={number}>
                                                    {number}
                                                </PaginationLink>
                                            </PaginationItem>
                                        );
                                    })
                                }
                            </Pagination>
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
        },
        onGetItemPerPage: (category,page) => {
            dispatch(getItemPerPage(category,page));
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(ProductsCategory);