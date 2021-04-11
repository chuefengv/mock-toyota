import React from 'react';
import './Hero.css';
import Slider from './slider/Slider';
import {one, two, three, four, five} from '../../assets/hero-image/index';
function Hero(){
    return(
        <div className='hero-wrapper'>
            <div className='hero-banner'>
                <img src={one} alt=''></img>
            </div>
            <div>
                INFORMATION HERE
                <Slider />
            </div>
        </div>
    )
}

export default Hero;