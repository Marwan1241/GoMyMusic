import React from 'react';
import '../css/Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import { useDataLayerValue } from '../DataLayer';

function Player({ spotify }) {
    const [{ token } , dispatch] = useDataLayerValue();

    return (
        <div className="Player">
            <div className="player__body">
            <Sidebar />
            <Body spotify={spotify}/>
            </div>

            <Footer accessToken={token} />
        </div>
    )
}

export default Player
