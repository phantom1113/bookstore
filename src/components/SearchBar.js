import { connect } from 'react-redux';
import { getBookSearch } from '../actions/index';
import React, { Component } from 'react'
import { Search, Grid, Item } from 'semantic-ui-react'

const initialState = { isLoading: false, value: '' }

const resultRenderer = ({ name,newprice,oldprice,image}) => {
  return (
    <Item>
      <Item.Image size='big' src={image} />
      <Item.Content>
        <Item.Header><b>{name}</b></Item.Header>
        <Item.Meta className="text-success">{newprice} VNĐ</Item.Meta>
        <Item.Meta className="text-danger" ><strike>{oldprice} VNĐ</strike></Item.Meta>
      </Item.Content>
    </Item>
  )
}



class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }


  handleResultSelect = (e, { result }) => {
    this.setState({value:''})
    this.props.history.push(`/detail/${result._id}`);
  }


  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      this.props.onGetBookSearch(this.state.value);
      this.setState({
        isLoading: false,
      })
    }, 300)
  }

  render() {
    const { isLoading, value } = this.state
    return (
      <div className="ui search">
          <div className="ui icon input">   
            <input className="prompt" type="text" placeholder="Search item..."></input>
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      books : state.books.booksearch,
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetBookSearch: (name) => {
      dispatch(getBookSearch(name));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);