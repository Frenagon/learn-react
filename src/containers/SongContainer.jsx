import React, {Component} from 'react';
import Song from "../components/Song";
import PropTypes from "prop-types";

class SongContainer extends Component {
    constructor(props) {
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    /**
     * Displays the name of the artist and changes the cover image and name
     * when the song is hovered over
     * @param e - event
     */
    handleMouseEnter(e) {
        e.target.innerHTML =
            e.target.getAttribute('name') + ' - ' +
            e.target.getAttribute('artist');

        this.props.changeCover(this.props.albumImg, this.props.albumName);
    }

    /**
     * Removes the name of the artist when the cursor leaves
     * @param e - event
     */
    handleMouseLeave(e) {
        e.target.innerHTML = e.target.getAttribute('name');
    }

    render() {
        return (
            <Song name={this.props.name}
                  artist={this.props.artist}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}>
                {this.props.name}
            </Song>
        );
    }
}

SongContainer.propTypes = {
    changeCover: PropTypes.func.isRequired,
    albumImg: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired
};

export default SongContainer;