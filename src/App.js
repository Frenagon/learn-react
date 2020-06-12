import React from 'react';
import './App.css';
import SongListContainer from "./containers/SongListContainer";

function App() {
    const songs = ['Stairway to Heaven', 'House of the Rising Sun', 'Hoodoo', 'R U Mine?'];
    const artists = ['Led Zeppelin', 'The Animals', 'Muse', 'Arctic Monkeys'];
    const albumImages = ['https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg',
                         'https://upload.wikimedia.org/wikipedia/en/3/30/The_Animals_%28American_album%29.jpg',
                         'https://upload.wikimedia.org/wikipedia/en/c/c5/BlackHolesCover.jpg',
                         'https://upload.wikimedia.org/wikipedia/en/0/04/Arctic_Monkeys_-_AM.png'];
    const albumNames = ['Led Zeppelin IV', 'The Animals', 'Black Holes and Revelations', 'AM'];

    return (
        <div className="App">
            <SongListContainer songs={songs}
                               artists={artists}
                               albumImages={albumImages}
                               albumNames={albumNames} />
        </div>
    );
}

export default App;
