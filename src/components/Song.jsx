import React from 'react';
import PropTypes from "prop-types";
import {songStyle} from "../styles/styles";

function Song(props) {
    return (
        <p style={songStyle}
           name={props.name}
           artist={props.artist}
           onMouseEnter={props.onMouseEnter}
           onMouseLeave={props.onMouseLeave}>
            {props.name}
        </p>
    );
}

Song.propTypes = {
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired
};

export default Song;