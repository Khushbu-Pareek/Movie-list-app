import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card';

class List extends Component {
    renderCard = (list, addContent) => {
        return <Card key={list.imdbID} list={list} addContent={addContent} />
    };

    render() {
        const { searchList = [], favourites = [] } = this.props;

        // Render list of movies/series as per search queries
        return (
            <div className="card-container">
                { 
                    searchList.map(list => {
                        const addContent = favourites.filter(({ Title }) => Title === list.Title);

                        return this.renderCard(list, !addContent.length);
                    }) 
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchList: state.searchList,
        favourites: state.favourites
    };
}

List.propTypes = {
    searchList: PropTypes.array,
    saveFaviourtesList: PropTypes.func
}

export default connect(
    mapStateToProps
)(List);
