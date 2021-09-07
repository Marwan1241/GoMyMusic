import React from 'react';
import '../css/Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid , Slider} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';


function Footer() {
    return (
        <div className="footer">
          <div className="footer__left">
              <img 
              className="footer__albumLogo"
              src="https://cdna.artstation.com/p/assets/images/images/010/722/852/large/oksana-radionova-nomnom24.jpg?1525885436" alt="" />
              <div className="footer__songInfo">
                  <h4>Lose Yourself</h4>
                  <p>Eminem</p>
              </div>

              <FavoriteIcon className="footer__green fav" />
          </div>

          <div className="footer__center">
            <ShuffleIcon className="footer__green" />
            <SkipPreviousIcon className="footer__icon" />
            <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
            <SkipNextIcon className="footer__icon" />
            <RepeatIcon className="footer__green" />
          </div>

          <div className="footer__right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
          </div>

        </div>
    )
}

export default Footer
