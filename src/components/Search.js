import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './List';
import { getMyShowURL } from '../constants/index';
import { saveSearchQuery, saveSearchList } from '../redux/actions/saveSearchAction';
import '../assests/Search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        };
    }

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    // On search button click -> make call to fetch data from api
    handleSearch = () => {
        const { saveSearchQuery } = this.props;
        const { searchValue } = this.state;

        saveSearchQuery(searchValue);
        this.fetchData(searchValue);
    }

    // fetch search result from api
    fetchData = searchInput => {
        const { saveSearchList } = this.props;
        const searchUrl = getMyShowURL(searchInput);

        fetch(searchUrl)
            .then(response => {
                return response.json();
            })
            .then(({ Search }) => {
                saveSearchList(Search);
            })
    };

    render() {
        const { searchList = [], searchValue } = this.props;

        // search component
        return (
            <Fragment>
                <input 
                    name="text" 
                    type="search" 
                    placeholder="Search Movies, TV Series or Seasons" 
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue}
                />
                <button onClick={this.handleSearch}>Search</button>

                <Fragment>
                    { searchValue && !searchList.length && 
                        <div className='error'>
                            No results found. Search again...
                        </div> 
                    }
                    <List searchList={searchList} />
                </Fragment>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchValue: state.searchValue,
        searchList: state.searchList
    };
}
  
const mapDispatchToProps = dispatch => ({
    saveSearchQuery: query => dispatch(saveSearchQuery(query)),
    saveSearchList: list => dispatch(saveSearchList(list)),
});

Search.propTypes = {
    searchValue: PropTypes.string,
    searchList: PropTypes.array,
    saveSearchQuery: PropTypes.func,
    saveSearchList: PropTypes.func,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
