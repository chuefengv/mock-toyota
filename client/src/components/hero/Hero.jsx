import React from 'react';
import './Hero.css';
import {one, two, three, four, five} from '../../assets/hero-image/index';
function Hero(){
    return(
        <div className='hero-wrapper'>
            <div className='hero-banner'>
                <img src={one} alt=''></img>
            </div>
            <div>
                INFORMATION HERE
            </div>
        </div>
    )
}

export default Hero;