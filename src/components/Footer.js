import React from 'react';
import '../css/Footer.css';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useDataLayerValue } from '../DataLayer';

function Footer({ trackUri }) {
    const [{ token } , dispatch] = useDataLayerValue();
    

    if(!token) return null
    return (
        <div className="footer">
             <SpotifyPlayer 
        className="SpotifyPlayer"
        token={token}
        showSaveIcon
        uris={trackUri ? [trackUri] : []}
        />
        </div>

        
    )
}

export default Footer
