import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../assests/Card.css';
import { removeFaviourtesList, saveFaviourtesList } from '../redux/actions/saveSearchAction';

class Card extends Component {
    render() {
        const { 
            list = {},
            addContent = false,
            removeFaviourtesList,
            saveFaviourtesList
        } = this.props;
        const { Title, Year, Poster, imdbID } = list;

        return (
            <div key={imdbID} className = "card">
                <button 
                    className={ `fav-btn ${!addContent && 'remove'}`}
                    style={{fontSize: '24px'}}
                    onClick={() => addContent ? saveFaviourtesList(list) : removeFaviourtesList(list)}
                > 
                    { addContent? 'Add to favourites' : 'Remove favourite' }
                </button>
                <div className = "card-img">
                    <img alt='loading..' src={ Poster } />
                </div>
                <div className = "card-info">{ Title }</div>
                <div className = "card-info">{ Year }</div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    saveFaviourtesList: list => dispatch(saveFaviourtesList(list)),
    removeFaviourtesList: list => dispatch(removeFaviourtesList(list))
});

Card.propTypes = {
    list: PropTypes.object,
    saveFaviourtesList: PropTypes.func,
    removeFaviourtesList: PropTypes.func
}

export default connect(
    null,
    mapDispatchToProps
)(Card);
