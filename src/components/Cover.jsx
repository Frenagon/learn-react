import React from 'react';
import PropTypes from 'prop-types';
import {coverStyle} from "../styles/styles";

function Cover(props) {
    return (
        <img src={props.img} alt={props.name} style={coverStyle} />
    );
}

Cover.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Cover;