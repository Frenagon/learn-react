import React from 'react';
import PropTypes from 'prop-types';
import {songListStyle} from "../styles/styles";
import Cover from "./Cover";

function SongList(props) {
    return (
        <React.Fragment>
            <ul style={songListStyle}>{props.songList}</ul>
            <Cover img={props.coverImg} name={props.coverName} />
        </React.Fragment>
    );
}

SongList.propTypes = {
    songList: PropTypes.array.isRequired,
    coverImg: PropTypes.string.isRequired,
    coverName: PropTypes.string.isRequired
};

export default SongList;