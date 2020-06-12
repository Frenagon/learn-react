import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SongContainer from "./SongContainer";
import SongList from "../components/SongList";

class SongListContainer extends Component {
    constructor(props) {
        super(props);

        //Sets the default cover image and name
        this.state = {
            coverImg: 'https://dalelyles.com/musicmp3s/no_cover.jpg',
            coverName: 'cover'
        };

        this.changeCover = this.changeCover.bind(this);
    }

    /**
     * Changes the cover image and name
     * @param img - New image
     * @param name - New name
     */
    changeCover(img, name) {
        this.setState( { coverImg: img, coverName: name } );
    }

    /**
     * Generates the list of songs
     * @returns {*[]} Array of songs
     */
    get songList() {
        return this.props.songs.map((song, i) =>
            <li key={'song_' + i}>
                <SongContainer key={'song_' + i}
                               name={song}
                               artist={this.props.artists[i]}
                               albumImg={this.props.albumImages[i]}
                               albumName={this.props.albumNames[i]}
                               changeCover={this.changeCover} />
            </li>
        );
    }

    render() {
        return (
            <SongList songList={this.songList}
                      coverImg={this.state.coverImg}
                      coverName={this.state.coverName} />
        );
    }
}

SongListContainer.propTypes = {
    songs: PropTypes.array.isRequired,
    artists: PropTypes.array.isRequired,
    albumImages: PropTypes.array.isRequired,
    albumNames: PropTypes.array.isRequired
};
export default SongListContainer;