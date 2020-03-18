import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card';

class MyContent extends Component {
    renderCard = list => {
        return <Card key={list.imdbID} list={list} />
    };

    render() {
        const { favourites = [] } = this.props;

        // render list of favourites
        return (
            <div className="card-container">
                { 
                    favourites.length
                        ? favourites.map(list => this.renderCard(list)) 
                        : <h3>No content added to favourites</h3>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        favourites: state.favourites
    };
}

MyContent.propTypes = {
    favourites: PropTypes.array,
}

export default connect(
    mapStateToProps
)(MyContent);
