import { connect } from 'react-redux';
import { getBookSearch } from '../actions/index';
import React, { Component } from 'react'
import { Search, SearchResult } from 'semantic-ui-react'
import _ from "lodash";
import PropTypes from "prop-types";

const initialState = { isLoading: false, results: [], value: "" };

const resultRenderer = ({ name, newprice, image }) => {
    return (
      <div className="result">
        <div className="image">
          <img src={image} alt={image} />
        </div>
        <div className="content">
          <div className="title">
            {name}
          </div>
          <div className="price">
            {newprice} VNĐ
          </div>
        </div>
      </div>
    );
  };
  
  resultRenderer.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  };
  
  SearchResult.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  };
  
 // Search.propTypes.results = PropTypes.array

class SearchBar2 extends Component {
  constructor(props) {
    super(props);
    this.state = initialState
  }

  componentWillReceiveProps(newProps){
    if( newProps.books !== this.props.books ){
        this.setState({
            isLoading: false,
            results: newProps.books
        })
    }
  }

  onGetBookSearch = (name) => {
    this.props.onGetBookSearch(name);
  }

  handleResultSelect = (e, { result }) => {
    this.setState({value:''})
    this.props.history.push(`/detail/${result._id}`);
  }


  handleSearchChange = async (e, { value }) => {
    this.setState({ isLoading: true, value })
    this.onGetBookSearch(value);
}

  render() {
    const { isLoading, value, results } = this.state
    return (
      <div key = "search-bar">
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            resultRenderer={resultRenderer}
            value={value}
          />
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


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar2);