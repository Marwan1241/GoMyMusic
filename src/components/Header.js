import React , { useState, useEffect } from 'react';
import '../css/Header.css';
import Footer from './Footer';
import TrackSearchResult from './TrackSearchResult';
import { Avatar } from "@material-ui/core";
import { Container, Form } from "react-bootstrap";
import { useDataLayerValue } from '../DataLayer';
import SpotifyWebApi from 'spotify-web-api-node';
import axios from 'axios';


const spotifyApi = new SpotifyWebApi({
    clientId: "1d3e07a3ae5b46a794e9aecf8aabce39",
});

function Header() {
    const [{ user , token } , dispatch] = useDataLayerValue();
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [playingTrack, setPlayingTrack] = useState();
    const [lyrics, setLyrics] = useState("");

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch('');
        setLyrics('');
    }

    useEffect(() => {
        if (!playingTrack) return

        axios
        .get('http://localhost:3000/lyrics', {
            params: {
                track: playingTrack.title,
                artist: playingTrack.artist,
            },
        })
        .then(res => {
            setLyrics(res.data.lyrics)
        })
    },[playingTrack])


    useEffect(() => {
        if(!token) return
        spotifyApi.setAccessToken(token);
    }, [token]);

    useEffect(() => {
        if(!search) return setSearchResults([]);
        if(!token) return;

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(
                res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce
                ((smallest, image) => {
                    if(image.height < smallest.height) return image;
                    return smallest
                }, track.album.images[0]);

                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url,
                }
            })
          )
        })

        return () => cancel = true

    } , [search, token])

    return (
        <div className="header">
                <Container className="d-flex flex-column py-2" style={{height: "100vh" }}>
                    <Form.Control
                    className="Search-bar"
                    type="search"
                    placeholder="Artists, songs, or albums"
                    value={search}
                    onChange={e => setSearch(e.target.value)} 
                    />

                    <div className="felx-grow-1 my-2" style={{ overflowY:'auto'}}>
                        {searchResults.map(track => (
                            <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
                        ))}
                        {searchResults.length === 0 && (
                            <div className='text-center' style={{ whitespace: "pre" }}>
                                {lyrics}
                            </div>
                        )}
                    </div>
                    <div>
                    <Footer accessToken={token} trackUri={playingTrack?.uri} />
                    </div>
                </Container>

            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
