import React , { useState , useEffect } from 'react';
import '../css/Footer.css';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useDataLayerValue } from '../DataLayer';

function Footer({ trackUri }) {
    const [{ token } , dispatch] = useDataLayerValue();
    const [play, setPlay] = useState(false);

    useEffect(() => setPlay(true), [trackUri])
    

    if(!token) return null
    return (
        <div className="footer">
             <SpotifyPlayer 
        className="SpotifyPlayer"
        token={token}
        showSaveIcon
        callback={state => {
            if(!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        />
        </div>

        
    )
}

export default Footer
